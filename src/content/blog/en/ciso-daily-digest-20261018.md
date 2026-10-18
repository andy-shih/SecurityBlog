---
title: "CISO Daily Digest: ConnectWise Disables Application Identities After Attackers Breach Microsoft 365 Tenants (20261018)"
description: "ConnectWise disabled seven key application identities and halted its Cloud Backup service after threat actors gained unauthorized access to customer Microsoft 365 tenants."
pubDate: 2026-10-18
tags: ["connectwise","cloud-backup","microsoft-365","identity-compromise","tenant-security","application-identities","supply-chain"]
author: "Security Solutions Team"
featured: true
---

## ConnectWise Disables Application Identities After Attackers Breach Microsoft 365 Tenants

ConnectWise disabled seven application identities on October 17, 2026, after discovering unknown threat actors obtained unauthorized access to identities and compromised customer Microsoft 365 tenants during an active security incident.

The provider suspended its Cloud Backup service by revoking certificates used for affected connections across all users, warning that previously issued access tokens might remain usable until they expire or face invalidation.

Security teams must review tenant configurations immediately, as disabling connections stops new authentication attempts but does not reverse previous tenant modifications, requiring administrators to remediate any unauthorized credentials or established access.

### Immediate CISO Action Items for Cloud Tenant Defense

- **Audit Multi-Tenant Credentials —** Review Microsoft 365 tenant logs to identify and remove persistent permissions created via compromised third-party connections.
- **Invalidate Stale Access Tokens —** Revoke active session tokens across enterprise cloud environments to terminate unauthorized sessions originating from disabled integration identities.
- **Assess Partner Access Risks —** Re-evaluate delegated administrative privileges granted to cloud management vendors to limit blast radiuses during SaaS supply-chain breaches.

**Reference:** [ConnectWise Suspends Cloud Backup After Attackers Compromise Microsoft 365 Tenants](<https://thehackernews.com/2026/10/connectwise-suspends-cloud-backup-after.html>)

---

## Active Threats This Week

---

## How OPSWAT Can Help

For incidents involving cloud file storage or collaboration such as SharePoint, S3, Salesforce, or Microsoft 365, the corresponding MetaDefender storage and cloud products can add inspection to storage and sharing workflows, subject to the services and integrations in use. [MetaDefender Storage Security, Storage Cloud, Salesforce Cloud, and Microsoft 365](<https://www.opswat.com/products/metadefender>)