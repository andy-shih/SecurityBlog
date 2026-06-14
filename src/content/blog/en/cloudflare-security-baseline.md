---
title: "Cloudflare Security Baseline for Public Websites"
description: "A concise baseline for using Cloudflare as an edge security layer without turning the dashboard into a maze."
pubDate: 2026-05-28
tags: ["Cloudflare", "Edge Security", "Baseline"]
author: "Andy.Shih"
featured: true
---

Cloudflare can improve security quickly, but value comes from a clear baseline rather than enabling every feature. The goal is to reduce common exposure while keeping operations predictable.

## Start with visibility

Before blocking aggressively, confirm that DNS, proxy status, SSL/TLS mode, redirects, and origin exposure are understood. A surprising number of incidents begin with an origin server that remains reachable directly.

Useful first checks include:

- DNS records that should be proxied are proxied.
- SSL/TLS mode is not configured in a way that weakens origin encryption.
- HTTP security headers are documented.
- Origin IP addresses are not casually exposed through old records or third-party services.

## Add guardrails

Rate limiting, WAF managed rules, bot controls, and page rules should map to specific abuse cases. For a blog or personal brand site, the baseline can stay lean: block obvious malicious traffic, limit abusive paths, and preserve cache performance.

## Keep deployment boring

For static Astro sites, Cloudflare Pages plus GitHub deployment keeps the operational model simple. The build should produce deterministic static output, and the security posture should be reviewed after each major content or architecture change.

A good edge security baseline is understandable enough that the site owner can maintain it without fear.
