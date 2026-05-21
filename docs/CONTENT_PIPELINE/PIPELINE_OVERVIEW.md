# Content Pipeline — Overview

## Purpose

Transform Metaxis blog posts into platform-specific social drafts.
Human reviews and approves before any content is published.

Pipeline is a transformation tool, not a publishing machine.

---

## Philosophy

- Source of truth: blog post in `content/blog/`
- Distribution layer: LinkedIn, Instagram, Facebook
- Human is always the last step before publish

Automation does not equal intelligence.
A fast pipeline that produces AI-slop is worse than no pipeline.

---

## Transformation Stages

```
blog post (source)
  → extract core message
  → generate platform drafts
  → evaluate against brand voice
  → human reviewer approves / rejects / edits
  → publish manually
```

Each stage has a clear input, output, and gate.
No stage auto-advances to the next.

---

## Evaluator Role

Every draft passes through evaluation before human review.

Evaluator checks:
- Does it sound like Metaxis?
- Is it platform-appropriate?
- Is it specific, not generic?
- Does it avoid rejected patterns?

Evaluator is not a gatekeeper that blocks publication.
It is a signal that tells the reviewer where to focus attention.

---

## Anti-Overengineering Rules

1. Do not build automation before the manual workflow is tested.
2. Do not add a stage unless you can describe its failure case.
3. Do not connect to an API until the content quality is validated.
4. Do not schedule posts until the reviewer loop is stable.
5. Simple Markdown files outperform complex databases at this stage.

---

## Why No Autonomous Posting in V1

- Account trust requires manual, consistent publishing first.
- Meta platforms penalize new accounts with sudden API volume.
- Content quality cannot be guaranteed without human judgment.
- The evaluator layer is not calibrated yet.
- V1 goal is a working manual workflow, not a working automation.

Autonomous posting is a Phase 4 decision, not a Phase 1 assumption.
