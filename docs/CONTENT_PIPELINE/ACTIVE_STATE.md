# Active State — Metaxis Content Pipeline

Current operational state of the pipeline. Updated after each significant milestone.

---

## System Type

**Semi-automated human-in-the-loop editorial operating system.**

Not an autonomous content machine. Claude/AI may extract, transform, draft, review, suggest visuals, and document learnings. A human must approve, reject, edit, publish, and validate feed perception.

This is a permanent design decision.

---

## Current Status

**Date:** 2026-05-22
**Phase:** Two full cross-platform content cycles complete. Real-world validation active.

```
Sprint 1: LOCKED + CROSS-PLATFORM DEPLOYED
Cycle 001 (blog-001 — systems framework): DEPLOYED, all three platforms
Cycle 002 (blog-002 — deployment narrative): DEPLOYED, all three platforms
Real-world validation: ACTIVE
Sprint 2 (second content cycle): COMPLETE
Automation: INTENTIONALLY DELAYED
```

---

## What Has Been Completed

### Pipeline infrastructure
- docs/CONTENT_PIPELINE/ — 10 operational documents
- content-pipeline/ — full folder structure (input/ processed/ drafts/ reviewed/ approved/)
- content-pipeline/visuals/ — visual archive (linkedin/instagram/facebook × raw/approved/deployed/rejected)
- EXAMPLES/ — calibration library (GOOD, BAD, BEFORE_AFTER)

### Cycle 001 — blog-001 (agent-loopovi: Think → Act → Verify)
- Source extracted → processed
- Platform drafts generated: LinkedIn (V1→V3), Instagram (V1→V2), Facebook (V1→V3)
- All three reviewed, iterated, human-approved
- Visual concepts defined, visuals produced and feed-tested
- All three deployed manually

| Platform  | Caption | Visual category     | Feed result                 |
|-----------|---------|---------------------|-----------------------------|
| LinkedIn  | V3      | A — Calm Typography | Deployed + feed-validated   |
| Instagram | V2      | C — Sketch Carousel | Deployed + directionally validated |
| Facebook  | V3      | B/D — Artifact      | Deployed + directionally validated |

Cycle 001 validated: systems explanation behavior, visual category system, feed-context testing as mandatory gate.

### Cycle 002 — blog-002 (Why the System Looked Fine Until It Failed)
- Source extracted → processed
- Platform drafts generated: LinkedIn (V1→V2), Instagram (V1→V3), Facebook (V1→V3)
- All three reviewed (three passes), human-approved
- Visual concepts defined, visuals produced and feed-tested
- All three deployed manually

| Platform  | Caption | Visual category     | Feed result                 |
|-----------|---------|---------------------|-----------------------------|
| LinkedIn  | V2      | B — Operational Screens | Deployed + validated    |
| Instagram | V3      | D — Human Context   | Deployed + validated        |
| Facebook  | V3      | C — Sketch Systems  | Deployed + validated        |

Cycle 002 validated: operational storytelling behavior, editorial restraint as anti-fingerprint strategy, visual evidence > visual identity, reader completing the thought > post delivering the lesson.

### Pipeline now demonstrates editorial range

Two completed cycles, two different source types, six different visual categories across six platform deployments. The system is not producing a single content format — it is producing platform-aware, source-aware editorial output.

This happened WITHOUT automation, APIs, schedulers, or evaluator agents.

---

## What Is NOT Built

Nothing below exists. Do not assume it does.

- Autonomous posting of any kind
- n8n or API connections for social publishing
- Scheduling system
- Evaluator/scoring agent
- Analytics or feedback loops
- Multi-agent orchestration
- Meta Graph API connection

---

## What Comes Next

**Recommended: Third content cycle (Sprint 3).**
Select a source post that is neither a systems framework nor a deployment narrative — a third content type. Run the full transformation workflow, produce different visual categories (see rotation table below), deploy across all three platforms.

Do not start evaluator work until at least three full cycles have produced at least 9 approved drafts across different source types.

Do not start automation under any conditions until evaluator is calibrated.

See NEXT_STEPS.md — Sprint 3.

---

## Visual Archive — Current State

```
content-pipeline/visuals/linkedin/deployed/
  → 2026-05-21_linkedin_agent-loopovi_DEPLOYED.png (Deployment 001)

content-pipeline/visuals/instagram/deployed/
  → 2026-05-22_instagram_agent-loopovi_DEPLOYED.png (Deployment 002)
  (or carousel slides: _slide-1.png, _slide-2.png, _slide-3.png)

content-pipeline/visuals/facebook/deployed/
  → 2026-05-22_facebook_agent-loopovi_DEPLOYED.png (Deployment 003)

content-pipeline/visuals/linkedin/rejected/
  → 2026-05-21_linkedin_agent-loopovi_v1.png (V1 footer readability failure)
```

If visual files have not been moved to the deployed/ folders yet, place them there before the next cycle begins.

---

## Visual Rotation Status

The following must NOT be repeated in the next cycle without variation:

| Platform  | Cycle 001                  | Cycle 002                   | Cycle 003 — do not repeat       |
|-----------|----------------------------|-----------------------------|----------------------------------|
| LinkedIn  | A — Calm Typography, amber | B — Operational Screens, cyan | A or B; amber or cyan accent   |
| Instagram | C — Sketch Carousel        | D — Human Context           | C or D; same workstation setup  |
| Facebook  | B/D — Artifact             | C — Sketch Systems          | B/D or C; same two-column diagram |

Remaining available primary categories per platform for Cycle 003:
- LinkedIn: C or D
- Instagram: A or B
- Facebook: A (text-only also valid)

---

## Automation Decision

Automation is not delayed because of time. It is delayed because:

1. One content cycle is not enough pattern data to calibrate a pipeline
2. The evaluator must be trained on multiple human-approved examples, not one
3. Meta account trust-building requires manual posting initially
4. Manual work surfaces what automation would hide

Revisit after: 3+ complete cycles, 9+ approved drafts across different source types, human confirms Sprint 4 (evaluator) scope.
