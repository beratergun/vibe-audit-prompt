# Vibe Audit Prompt — English guide

[Home](README.md) · [Türkçe](README.tr.md) · [Full English prompt](prompts/AUDIT_PROMPT.en.md)

This pack supports repeatable reviews of security, quality, privacy, legal-related technical issues, and production readiness. It is independent of any particular framework or application. Reuse it for your own projects and authorized client/team projects.

## First use

1. Open the project in a coding agent with source and terminal access. Preserve existing work and project instructions.
2. Supply the **entire** [English prompt](prompts/AUDIT_PROMPT.en.md) as a task. If copied into the project, explicitly ask the agent to read and apply it. The README alone does not initiate the full scope.
3. Adjust its project configuration if useful. Supply environment/role/variable names, never secret values. Let the agent discover unknown fields.
4. Use `audit-and-safe-fix` for safe local remediation, `audit-only` for review without application code changes, or `retest` for previous findings and affected flows.
5. Review scope, actual execution, blockers, and unresolved findings in the reports. Complete missing tests when access becomes available. Do not publish raw audit evidence.

Placing a file in a project does not automatically run an audit. Give an explicit task such as:

```text
Read and apply the entire prompts/AUDIT_PROMPT.en.md file to this project.
Mode: audit-and-safe-fix. Use isolated local synthetic test environments.
Discover the architecture and existing test baseline first.
Implement authorized reversible local fixes and retest them.
Deliver reports in the structure required by the prompt.
```

Adjust the path if you copied the prompt elsewhere. Use a task-specific instruction rather than permanent agent rules when you do not want every future interaction to trigger a full audit.

## Examples by project

| Project | Useful configuration |
|---|---|
| Public website | If accounts/payments/data collection are absent, establish NOT_APPLICABLE with evidence; still inspect forms, analytics, scripts, headers, accessibility, and builds. |
| Supabase SaaS | Synthetic tenants A/B, members/admins, local/test database; include RLS operations, views/functions, and storage. |
| Paid product | Provider sandbox, synthetic customers/products; exercise subscriptions/webhooks without real billing or messaging. |
| Mobile app | Android/iOS build commands, device/emulator access, critical journeys; an unavailable platform remains unverified. |
| AI/RAG/agent | Test documents, tenant ACLs, mock tools, spend/token bounds, and actions requiring approval. |

For authorized staging, specify hosts/ports/protocols/paths, accounts, test classes, and request limits. Finding a public URL does not grant scanning authority. Define separate scope for load testing, active scanning, and paid provider operations.

## Reading the outcome

- `PASS` requires evidence for its scope/method. `STATIC` evidence is not a runtime application test.
- `FAIL` means an expected control is violated; inspect the finding and evidence.
- `BLOCKED` / `NOT_EXECUTED` indicate missing verification, not clean results.
- `MANUAL_REVIEW` requires a dashboard/device/legal expert or human decision.
- `NOT_APPLICABLE` needs a reason confirming the feature or threat is irrelevant.

Release assessments are `BLOCKED`, `CONDITIONAL`, or `READY_WITHIN_SCOPE`. A high pass percentage cannot compensate for a missing critical authorization test. A code patch is separate from live verification; deleting a secret does not rotate it.

## Reports and repeated audits

The full prompt requests eight main reports: master assessment, control matrix, findings, test results, remediation, privacy/legal review, tool review, and next actions. The [report skeleton](templates/REPORT_TEMPLATE.en.md) shows shared fields; split real detail into the requested files.

Repeat before important releases and after identity/authorization/payment/data/infrastructure changes. Record previous and current commits. Preserve IDs; add project-specific EXT controls. Resume large audits from AUDIT_STATE.md rather than claiming unfinished work is complete.

Using the prompt installs no skills, MCP servers, or scanners. Any agent-selected tool needs separate review. The [vibe-check review](docs/THIRD_PARTY_REVIEW.md) concerns an independent project; this repository is not its fork.

## Legal scope

Identify target markets and business model. KVKK/GDPR, cookies, commercial messaging, IYS, consumer/subscription, content, and licensing topics require applicability analysis. This pack is not legal advice or certification. Verify changing fines/deadlines with current official sources for the actual circumstances. See [research notes](docs/SOURCES.md).

Use and adapt under MIT while preserving its notice. Third-party documents, trademarks, and licenses remain separately governed.
