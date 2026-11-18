# infra

Terraform for the CV's domain:

- `cv.alankan.dev`: a DNS-only CNAME in Cloudflare that points at GitHub Pages
- `a4-resume.alankan.dev`: proxied through Cloudflare, with a 301 redirect to
  `cv.alankan.dev`
- the custom domain setting on this repository's GitHub Pages site

The [infra workflow](../.github/workflows/infra.yml) runs `terraform plan` on
pull requests that touch `infra/`, and `terraform apply` when they merge to
`main`. After an apply it rebuilds the site, so the page's links and preview
tags use the new domain. Terraform state is kept in a Cloudflare R2 bucket.

## One-time setup

### 1. State bucket (Cloudflare R2)

1. In the Cloudflare dashboard, open **R2** and turn it on. The free tier
   (10 GB-month of storage, 1M writes and 10M reads a month) easily covers a
   state file. Cloudflare may still ask for a payment method.
2. Create a bucket named `cv-infra-tfstate`.
3. Go to **R2 → Manage API tokens → Create API token**. Give it
   **Object Read & Write** on that bucket only, then copy the
   **Access Key ID** and **Secret Access Key**.
4. Copy your **Account ID** from the R2 overview page.

### 2. Cloudflare API token for DNS and redirects

**My Profile → API Tokens → Create Token → Custom token**, with zone
resources limited to `alankan.dev`:

- Zone → Zone → Read
- Zone → DNS → Edit
- Zone → Single Redirect → Edit (older dashboards call it Dynamic Redirect)

### 3. GitHub token for the Pages setting

The workflow's built-in token can't change Pages settings. Create a
**fine-grained personal access token** (GitHub → Settings → Developer
settings) for the `alank976/a4-resume` repository only, with these
repository permissions:

- Administration: Read and write
- Pages: Read and write

### 4. Repository secrets

In **Settings → Secrets and variables → Actions**, add:

| Secret                  | Value                         |
| ----------------------- | ----------------------------- |
| `CLOUDFLARE_ACCOUNT_ID` | Account ID from step 1        |
| `R2_ACCESS_KEY_ID`      | R2 Access Key ID from step 1  |
| `R2_SECRET_ACCESS_KEY`  | R2 Secret Access Key from step 1 |
| `CLOUDFLARE_API_TOKEN`  | token from step 2             |
| `PAGES_ADMIN_TOKEN`     | token from step 3             |

### 5. Remove the hand-made DNS record

Delete the existing `a4-resume` record in Cloudflare DNS. Terraform creates
it again as the redirect, and it can't create a record that already exists.
The old address is down only until the first apply finishes.

### 6. Apply

Merge to `main`, or run the **infra** workflow by hand. Check its plan first:
it should add 2 DNS records and 1 ruleset, import the Pages site, and change
only the Pages `cname`.

### Changing the domain later

GitHub can't enforce HTTPS until it has issued a certificate for the new
domain. Set `enforce_https` to `null` in [`variables.tf`](variables.tf) for
the apply that changes the domain. When **Settings → Pages** shows the
certificate is ready (usually a few minutes, sometimes up to an hour), set it
back to `true`.

## Running Terraform locally

```bash
cd infra
export AWS_ACCESS_KEY_ID=... AWS_SECRET_ACCESS_KEY=...   # R2 keys
export AWS_REQUEST_CHECKSUM_CALCULATION=when_required AWS_RESPONSE_CHECKSUM_VALIDATION=when_required
export CLOUDFLARE_API_TOKEN=... GITHUB_TOKEN=...
terraform init -backend-config='endpoints={s3="https://<account-id>.r2.cloudflarestorage.com"}'
terraform plan
```

R2 has no state locking, so don't apply locally while the workflow is
running.
