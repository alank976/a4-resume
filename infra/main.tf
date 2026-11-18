locals {
  cv_domain        = "${var.hostname}.${var.zone}"
  redirect_domains = [for name in var.redirect_hostnames : "${name}.${var.zone}"]
}

data "cloudflare_zone" "this" {
  filter = {
    name = var.zone
  }
}

# cv.alankan.dev -> GitHub Pages. Must stay DNS-only (not proxied) so GitHub
# can issue and renew the HTTPS certificate for the domain.
resource "cloudflare_dns_record" "cv" {
  zone_id = data.cloudflare_zone.this.zone_id
  name    = local.cv_domain
  type    = "CNAME"
  content = "${var.github_owner}.github.io"
  ttl     = 1
  proxied = false
  comment = "CV on GitHub Pages, managed by Terraform in ${var.github_owner}/${var.github_repository}"
}

# Old hostnames are proxied through Cloudflare so the redirect rule below can
# answer them. They don't point at GitHub Pages any more, which also stops
# anyone else from claiming them there.
resource "cloudflare_dns_record" "redirect" {
  for_each = toset(var.redirect_hostnames)

  zone_id = data.cloudflare_zone.this.zone_id
  name    = "${each.value}.${var.zone}"
  type    = "CNAME"
  content = local.cv_domain
  ttl     = 1
  proxied = true
  comment = "Redirects to ${local.cv_domain}, managed by Terraform in ${var.github_owner}/${var.github_repository}"
}

# A zone has one ruleset per phase, so this owns all single redirect rules in
# the zone. Add other redirects here rather than in the dashboard.
resource "cloudflare_ruleset" "redirects" {
  count = length(var.redirect_hostnames) > 0 ? 1 : 0

  zone_id     = data.cloudflare_zone.this.zone_id
  name        = "Redirects"
  description = "Managed by Terraform in ${var.github_owner}/${var.github_repository}"
  kind        = "zone"
  phase       = "http_request_dynamic_redirect"

  rules = [
    {
      description = "Old CV hostnames to ${local.cv_domain}"
      expression  = "http.host in {${join(" ", [for domain in local.redirect_domains : "\"${domain}\""])}}"
      action      = "redirect"
      action_parameters = {
        from_value = {
          status_code           = 301
          preserve_query_string = true
          target_url = {
            expression = "concat(\"https://${local.cv_domain}\", http.request.uri.path)"
          }
        }
      }
    }
  ]
}

# GitHub Pages already exists for the repository, so adopt it instead of
# creating it.
import {
  to = github_repository_pages.cv
  id = var.github_repository
}

resource "github_repository_pages" "cv" {
  repository = var.github_repository
  build_type = "workflow"
  cname      = local.cv_domain

  lifecycle {
    # Destroying this resource would turn GitHub Pages off.
    prevent_destroy = true

    # integrations/github v6.13 sends "cname": null, which removes the custom
    # domain, on any update that doesn't also change cname. So Terraform must
    # never update anything else on this resource. "Enforce HTTPS" is ticked
    # once by hand in Settings -> Pages after the certificate is issued.
    ignore_changes = [https_enforced, public]
  }

  # GitHub checks the DNS record when the domain is set.
  depends_on = [cloudflare_dns_record.cv]
}
