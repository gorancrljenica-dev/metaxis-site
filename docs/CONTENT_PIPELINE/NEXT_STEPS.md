# Next Steps — Content Pipeline Roadmap

## Sprint 1 — Manual Workflow (Current)

**Goal:** Validate the transformation process manually before building any automation.

Tasks:
- Pick one blog post as test case
- Write LinkedIn draft by hand, following PLATFORM_RULES + TONE_GUIDE
- Write Instagram draft
- Write Facebook draft
- Run all three through REVIEWER_RULES checklist
- Check against REJECTED_PATTERNS
- Save output as structured Markdown in `content/social-drafts/`

Done when: one complete set of drafts passes review without AI-slop flags.

Sprint 1 also requires:
- At least one approved draft saved to `EXAMPLES/GOOD/`
- At least one rejected draft saved to `EXAMPLES/BAD/` with rejection reason
- Optionally: one BEFORE_AFTER transformation if a draft required revision

---

## Sprint 2 — Second Content Cycle ✓ COMPLETE

**Goal:** Run a second controlled content cycle with a different source post and different visual categories.

**Status:** Complete. blog-002 (Why the System Looked Fine Until It Failed) deployed across LinkedIn (V2), Instagram (V3), Facebook (V3).

**What Cycle 002 validated:**
- Operational storytelling behavior (deployment failure narrative vs. systems framework)
- Editorial restraint as anti-fingerprint strategy
- Visual evidence > visual identity
- Reader completing the thought > post delivering the lesson

---

## Sprint 3 — Third Content Cycle (Recommended Next Step)

**Goal:** Run a third controlled content cycle with a source type that is neither a systems framework nor a deployment failure narrative.

**Why a third cycle before the evaluator:**
Two cycles produced two validated source types. The evaluator must generalize across source types, not just optimize for one or two. A third cycle with a genuinely different content type (observational, reflective, announcement, tool-focused, etc.) is needed before evaluator calibration can begin.

**Visual rotation requirement:**
- LinkedIn: Category C or D (A and B used in Cycles 001 and 002)
- Instagram: Category A or B (C and D used in Cycles 001 and 002)
- Facebook: Category A or text-only (B/D and C used in Cycles 001 and 002)

**Avoid:**
- Returning immediately to systems-framework content (Cycle 001 territory)
- Returning immediately to deployment failure narrative (Cycle 002 territory)
- Repeating any visual category on the same platform

Tasks:
- Select a third source blog post — different content type from Cycles 001 and 002
- Run full transformation cycle: processed → drafts → reviewed → approved
- Apply visual rotation — do not reuse any Cycle 001 or 002 category on the same platform
- Deploy across all three platforms
- Document in REAL_WORLD_VALIDATION.md (Deployments 007, 008, 009)

Done when: third post deployed and feed-reviewed on all three platforms.
- Deploy across all three platforms
- Document feed observations in REAL_WORLD_VALIDATION.md (Deployments 004, 005, 006)
- Update EXAMPLES/GOOD with new approved drafts
- Add any new rejection patterns to EXAMPLES/BAD

Done when: second post completed and deployed across all three platforms.

**Automation remains delayed.**
Do not start Sprint 3 (queue/draft management) or the evaluator layer until at least 2 full cycles are complete and at least 6 approved drafts exist in EXAMPLES/GOOD.

---

## Sprint 4 — Evaluator Layer

**Goal:** Build a structured evaluator that scores drafts before human review.

Tasks:
- Define scoring schema (tone fit, platform fit, slop detection, specificity score)
- Create evaluator prompt using REJECTED_PATTERNS + REVIEWER_RULES as context
- Test evaluator against Sprint 1 and Sprint 2 output
- Tune until evaluator flags match reviewer judgment in 3 out of 3 test cases per platform

Done when: evaluator catches what a human reviewer catches, verified across at least 2 source posts.

Evaluator calibration depends on EXAMPLES/GOOD and EXAMPLES/BAD having examples from multiple cycles.
Do not build evaluator logic before at least 6 approved examples exist (2 cycles × 3 platforms).

---

## Sprint 4 — Queue and Draft Management

**Goal:** Structured input/output pipeline for managing content in progress.

Tasks:
- Define draft schema (status: draft / reviewed / approved / rejected)
- Create `content/social-drafts/` file convention
- Build CLI or simple script to generate drafts from a blog slug
- No API connections. No scheduling. Local only.

Done when: reviewer can open a draft file, edit it, and mark it approved without running code.

---

## Sprint 5 — Automation Evaluation (Not Scheduled)

**Goal:** Decide if and where automation adds value without degrading quality.

This sprint does not start until:
- Sprint 4 is stable and tested
- Manual workflow has produced at least 10 approved drafts
- Meta accounts have sufficient trust history (see platform roadmap)
- Evaluator layer is calibrated

Candidates for automation:
- Draft generation trigger (blog commit → generate drafts)
- Evaluator scoring (auto-flag low-quality drafts)
- Scheduling queue (not auto-posting — human still approves)

**No autonomous publishing is planned in Sprint 5 or any early phase.**
Auto-posting requires: stable evaluator, account trust, Meta App Review, and explicit decision to proceed.

---

## Example Library — Ongoing Discipline

`docs/CONTENT_PIPELINE/EXAMPLES/` is not an archive. It is an active calibration layer.

Rules:
- Every sprint saves at least one GOOD example (approved draft)
- Every sprint saves at least one BAD example (rejected draft with reason)
- BEFORE_AFTER examples are saved whenever a draft required more than one revision
- Future evaluator logic must be tested against real GOOD/BAD examples before any automation is attempted
- Reviewer calibration depends on accumulating real examples — not abstract rules alone

The evaluator is only as good as its example library.

---

## Principles That Apply to All Sprints

- Manual first. Automate only what is understood.
- Every automated step was a manual step first.
- Automation does not replace the reviewer. It assists the reviewer.
- No sprint starts before the previous sprint's done criteria are met.
- Example library maintenance is mandatory, not optional.
