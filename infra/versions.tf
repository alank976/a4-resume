terraform {
  required_version = ">= 1.10"

  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 5.29"
    }
    github = {
      source  = "integrations/github"
      version = "~> 6.13"
    }
  }

  # State lives in a Cloudflare R2 bucket through R2's S3-compatible API.
  # The endpoint and credentials come from the environment; see README.md.
  backend "s3" {
    bucket = "cv-infra-tfstate"
    key    = "a4-resume/terraform.tfstate"
    region = "auto"

    skip_credentials_validation = true
    skip_metadata_api_check     = true
    skip_region_validation      = true
    skip_requesting_account_id  = true
    skip_s3_checksum            = true
    use_path_style              = true
  }
}

# Reads CLOUDFLARE_API_TOKEN from the environment.
provider "cloudflare" {}

# Reads GITHUB_TOKEN from the environment.
provider "github" {
  owner = var.github_owner
}
