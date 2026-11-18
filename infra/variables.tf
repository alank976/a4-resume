variable "zone" {
  description = "Cloudflare zone (domain) that hosts the CV."
  type        = string
  default     = "alankan.dev"
}

variable "hostname" {
  description = "Subdomain the CV is served on."
  type        = string
  default     = "cv"
}

variable "redirect_hostnames" {
  description = "Old subdomains that should 301-redirect to the CV."
  type        = list(string)
  default     = ["a4-resume"]
}

variable "github_owner" {
  description = "GitHub user that owns the repository."
  type        = string
  default     = "alank976"
}

variable "github_repository" {
  description = "Repository that publishes the CV with GitHub Pages."
  type        = string
  default     = "a4-resume"
}
