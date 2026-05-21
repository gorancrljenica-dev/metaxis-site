# reviewed/

Evaluator-checked and human-reviewed drafts.

## What belongs here

- Drafts that have passed REVIEWER_RULES.md checklist
- Human-edited versions of generated drafts
- Drafts with reviewer comments attached
- Rejected drafts with rejection reason noted

## What does NOT belong here

- Unreviewed drafts (those stay in drafts/)
- Approved final content (that moves to approved/)
- Source or processed files

## Naming convention

Same as drafts/, no rename needed:

```
blog-001_linkedin.md
blog-001_instagram.md
```

## File header update (required on review)

Update the draft header:

```yaml
---
status: reviewed | rejected
source: blog-001_processed.md
platform: linkedin
generated: YYYY-MM-DD
reviewed: true
reviewed_by: [initials or "human"]
reviewed_date: YYYY-MM-DD
rejection_reason: [tag from REVIEWER_RULES, or blank if approved]
---
```

## Workflow rule

```
drafts/ → reviewed/ → approved/
```

Rejected files stay here. They are not deleted — they move to `docs/CONTENT_PIPELINE/EXAMPLES/BAD/` as calibration data.
