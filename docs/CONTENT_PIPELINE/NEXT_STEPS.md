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

## Sprint 2 — Evaluator Layer

**Goal:** Build a structured evaluator that scores drafts before human review.

Tasks:
- Define scoring schema (tone fit, platform fit, slop detection, specificity score)
- Create evaluator prompt using REJECTED_PATTERNS + REVIEWER_RULES as context
- Test evaluator against Sprint 1 output
- Tune until evaluator catches what reviewer catches

Done when: evaluator flags match reviewer judgment in 3 out of 3 test cases.

Evaluator calibration depends on EXAMPLES/GOOD and EXAMPLES/BAD being populated first.
Do not build evaluator logic before at least 3 examples exist in each folder.

---

## Sprint 3 — Queue and Draft Management

**Goal:** Structured input/output pipeline for managing content in progress.

Tasks:
- Define draft schema (status: draft / reviewed / approved / rejected)
- Create `content/social-drafts/` file convention
- Build CLI or simple script to generate drafts from a blog slug
- No API connections. No scheduling. Local only.

Done when: reviewer can open a draft file, edit it, and mark it approved without running code.

---

## Sprint 4 — Automation Evaluation (Not Scheduled)

**Goal:** Decide if and where automation adds value without degrading quality.

This sprint does not start until:
- Sprint 3 is stable and tested
- Manual workflow has produced at least 10 approved drafts
- Meta accounts have sufficient trust history (see platform roadmap)
- Evaluator layer is calibrated

Candidates for automation:
- Draft generation trigger (blog commit → generate drafts)
- Evaluator scoring (auto-flag low-quality drafts)
- Scheduling queue (not auto-posting — human still approves)

**No autonomous publishing is planned in Sprint 4 or any early phase.**
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
