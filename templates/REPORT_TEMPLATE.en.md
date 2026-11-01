# Audit report skeleton — UNFILLED TEMPLATE

This is not a completed audit. Populate fields from actual records; never PASS unexecuted tests. Split into the eight reports required by the full prompt. Build the control matrix from every ID in data/controls.json; the example row does not mean 144 controls were assessed.

## Run identity

| Field | Value |
|---|---|
| Project / report ID | FILL |
| Start/end and timezone | FILL |
| Branch / full commit / working changes | FILL |
| Mode / reviewer / authorization record | FILL |
| Targets / exclusions / request budget | FILL |
| Environment / runtimes / tool and rule versions | FILL |
| Previous report / standard versions and target level | FILL |

## Executive assessment

Release decision: NOT_ASSESSED. Describe actual critical journeys, unique findings, fixes, and unverified boundaries. Do not guarantee security.

## Scope and threat model

| Asset / flow | Entry / trust boundary | Threat | Existing control | Validation / evidence | Residual risk |
|---|---|---|---|---|---|
| FILL | FILL | FILL | FILL | FILL | FILL |

## Control matrix — all baseline and EXT controls

| ID | Applicability / reason | Status | Method | Evidence | Test ID | Finding ID | Owner |
|---|---|---|---|---|---|---|---|
| SCOPE-01 | FILL | NOT_EXECUTED | FILL | FILL | FILL | FILL | FILL |

Statuses: PASS / FAIL / BLOCKED / NOT_EXECUTED / NOT_APPLICABLE / MANUAL_REVIEW. Explain missing evidence and required access. The example is not a default result.

## Test execution ledger

| Test ID / controls | Objective / synthetic fixture | Environment / commit | Command / version | Expected | Observed / exit code | Status / duration | Sanitized evidence / cleanup |
|---|---|---|---|---|---|---|---|
| FILL | FILL | FILL | FILL | FILL | NOT RUN | NOT_EXECUTED | FILL |

Explain baseline failures, timeouts, partial scans, skip/only markers, and flaky tests.

## Finding F-001 — title

- Control/test references and location: FILL (commit, file, verified line).
- Certainty / severity / priority and rationale: FILL.
- Preconditions, root cause, input→sensitive-operation data flow: FILL.
- Expected/observed result; realistic impact and scope: FILL.
- Harmless reproduction and sanitized evidence reference: FILL.
- Minimal recommendation, owner, effort, regression risk: FILL.
- Lifecycle, changed files, before/after tests: FILL.
- Retest / external remaining action / rollback: FILL.

## Privacy and legal review

| Technical fact / data flow | Country / market / role assumptions | Potential duty | Current official source / date | Counsel question | Owner / status |
|---|---|---|---|---|---|
| FILL | UNKNOWN | TO_REVIEW | UNVERIFIED | FILL | MANUAL_REVIEW |

## Remediation and regression

Changed files/diff, security impact, targeted tests, existing regressions, platform evidence, rollback, and concrete pending approvals: FILL. Distinguish FIXED_UNVERIFIED from VERIFIED_FIXED.

## Counts and decision

Control total, applicable total, all status counts, numerators/denominators, plus separate test totals/status counts: COMPUTE FROM ACTUAL RECORDS. Duplicate scanner warnings must not inflate unique findings. Missing required critical verification rules out READY_WITHIN_SCOPE.

## Next actions

| Priority | Owner | Work / dependencies | Acceptance criteria / retest | Due date / approval |
|---|---|---|---|---|
| FILL | FILL | FILL | FILL | FILL |

## Continuation state

Completed IDs, remaining work, evidence directory, and next exact command: FILL. Never include real secrets or personal data.
