# JDM and Associates — Website

**Live Site:** [www.csjdm.com](https://www.csjdm.com)

---

## 📋 Project Information Document

### Main Domain

- `www.csjdm.com`
- `csjdm.com`

### Primary Admin Account

| Field    | Value            |
| :------- | :--------------- |
| Email    | jaisal@csjdm.com |
| Password | Jaisal@1616      |

---

## 1. Master Account Access

All project accounts are linked to the professional Google Account **jaisal@csjdm.com**.

> **Important:** To access any of the services below, simply go to the login page and sign in with the primary admin account credentials above.

| Service    | Purpose                                                     | Website                                            |
| :--------- | :---------------------------------------------------------- | :------------------------------------------------- |
| Cloudflare | Keeps the website online, fast, and safe from hackers       | [dash.cloudflare.com](https://dash.cloudflare.com) |
| Web3Forms  | Sends an email when someone fills out the "Contact Us" form | [web3forms.com](https://web3forms.com)             |
| GitHub     | Securely stores all the behind-the-scenes website code      | [github.com](https://github.com)                   |

---

## 2. Service Limits (Free Tier)

The setup uses professional Free Tiers. Below are the limits to keep in mind as the firm grows:

### Cloudflare (Hosting & Security)

| Limit       | Detail                                                                                             |
| :---------- | :------------------------------------------------------------------------------------------------- |
| Bandwidth   | **Unlimited.** Unlike other hosts, Cloudflare does not charge for how many people visit your site. |
| Builds      | **500 per month** (This only applies when a developer changes the code).                           |
| Files       | Up to **20,000 files** per site (The current site uses a tiny fraction of this).                   |
| DNS Records | Up to **200 records** (Currently using fewer than 5).                                              |

### Web3Forms (Contact Form)

| Limit               | Detail                                                                                                                                               |
| :------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| Monthly Submissions | **250 forms per month.** If more than 250 inquiries are received in a month, the form will stop sending emails until the next month unless upgraded. |
| Submission History  | Viewable in the dashboard for **30 days**.                                                                                                           |
| File Uploads        | **Not supported** on the free plan (standard text inquiries only).                                                                                   |

---

## 3. Maintenance Guide

### Email Inquiries

When a client submits a form on [www.csjdm.com](https://www.csjdm.com), the email will arrive in the `jaisal@csjdm.com` inbox, sent via Web3Forms. If emails stop arriving, check the Web3Forms dashboard to see if the 250-submission monthly limit has been exceeded.

### Domain Renewal

The domain `csjdm.com` must be **renewed every year**. It is bought and managed directly through **ResellerClub**. Cloudflare provides security and hosting for free, but the domain name itself must be paid for annually at the registrar.

### Security & SSL

The "Padlock" icon (SSL certificate) is handled **automatically by Cloudflare**. It will never expire as long as the domain points to Cloudflare's nameservers.

---

## 4. Instructions for Future Developers

If a new developer takes over this project, provide them with this document along with the following technical notes:

| Detail     | Info                                                                                                                             |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------- |
| Framework  | Built with **Astro**                                                                                                             |
| Repository | Hosted on **GitHub** (Sign in with Google: `jaisal@csjdm.com`)                                                                   |
| Deployment | Connected via **Cloudflare Pages** with automatic deployments on `git push`                                                      |
| DNS        | Managed entirely through **Cloudflare**. Do not modify DNS settings at the registrar unless migrating the entire infrastructure. |
| Form Key   | The Web3Forms Access Key is embedded via environment variable and referenced in `src/components/ContactForm.astro`.              |

---

## 🚀 Local Development

All commands are run from the root of the project:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## 🗂 Project Structure

```text
/
├── public/
├── src/
│   ├── components/
│   │   └── ContactForm.astro   ← Web3Forms key lives here (via env var)
│   └── pages/
│       └── index.astro
└── package.json
```
