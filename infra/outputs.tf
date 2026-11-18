output "cv_url" {
  description = "Where the CV is served."
  value       = "https://${local.cv_domain}"
}

output "redirects" {
  description = "Hostnames that redirect to the CV."
  value       = local.redirect_domains
}
