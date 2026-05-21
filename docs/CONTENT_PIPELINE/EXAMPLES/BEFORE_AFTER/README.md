# BEFORE / AFTER Examples

Transformation pairs showing weak drafts improved to passing quality.

## What belongs here

- Side-by-side comparisons of a rejected draft and its approved revision
- Annotated edits explaining WHY the change improved the output
- Examples useful for calibrating future evaluators and reviewers
- Real cases from actual sprint work, not invented illustrations

## What makes a useful BEFORE_AFTER

- The BEFORE version clearly failed a reviewer rule
- The AFTER version passes without further edits
- The annotation names the specific failure: not just "it's better" but "removed fake-authority opener, replaced with concrete operational claim"
- The example is specific enough to be reused as evaluator context

## File naming convention

```
YYYY-MM-DD_platform_slug.md
```

Example:
```
2026-05-21_linkedin_agent-loopovi.md
```

## File structure inside each example

```markdown
## BEFORE

[original rejected draft]

**Rejection reason:** [tag from REVIEWER_RULES]

---

## AFTER

[revised approved draft]

**What changed:**
- [specific edit 1]
- [specific edit 2]
```

## Sprint discipline

BEFORE_AFTER examples are optional per sprint.
Required when: a draft required more than one revision cycle, or when the evaluator missed a failure that the reviewer caught.

These cases are the most valuable for future calibration.
