# Cloudflare Pages Deployment Guide

Follow these steps to deploy your website on Cloudflare Pages:

## 1. Log in to Cloudflare
Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) and log in with your account.

## 2. Navigate to Pages
1. In the left navigation sidebar, click on **Workers & Pages**.
2. Click on **Create Application** (or **Create** if you already have projects).
3. Select the **Pages** tab and click on **Connect to Git**.

## 3. Connect Your Repository
1. Select your Git provider (GitHub or GitLab) and authenticate.
2. Select your repository: `MY-WEBSITE`.
3. Click **Begin setup**.

## 4. Configure Build Settings
Configure the build and deployment settings exactly as follows:

| Setting | Value | Description |
| :--- | :--- | :--- |
| **Project Name** | `ck-engineering-solutions` (or your preferred name) | This will determine your default subdomain (e.g., `ck-engineering-solutions.pages.dev`). |
| **Production Branch** | `main` | The branch that triggers production deployments. |
| **Framework Preset** | *None* | Select **None** from the dropdown list. |
| **Root Directory** | `/` (Leave blank / default) | Indicates that the project is at the root of the repository. |
| **Build Command** | `echo "No build required"` | As this is a pure HTML/CSS/JS site, no build step is needed. |
| **Build Output Directory** | `/` (or leave empty/default) | Points to the root directory containing your `index.html`, `styles.css`, and `script.js` files. |

## 5. Environment Variables
*No build variables are required* for this project. You can leave this section empty.

## 6. Deploy
1. Click **Save and Deploy**.
2. Cloudflare will fetch your repository, compile the static files, and publish them online.
3. Once completed, you will receive a public `.pages.dev` URL where your rebranded website is live!

---
*Created for CK Engineering Solutions*
