# processed/

Structured extraction layer. Normalized, transformation-ready content.

## What belongs here

- Extracted core message from source
- Key points (bulleted, not rewritten)
- Usable quotes from source
- CTA candidates
- Audience and platform notes
- Transformation-ready summary (150–300 words max)

## What does NOT belong here

- Full copies of input files
- Platform drafts
- Edited or rewritten source content
- Unstructured raw notes

## Naming convention

Match the source file name, add `_processed`:

```
blog-001_processed.md
ebook-002_processed.md
ops-note-003_processed.md
```

## File structure inside each processed file

```markdown
## Source
[filename from input/]

## Core message
[1–2 sentences]

## Key points
- [point 1]
- [point 2]

## Usable quotes
- "[exact quote from source]"

## CTA candidates
- [possible CTA 1]

## Platform notes
- LinkedIn: [angle or format note]
- Instagram: [angle or format note]
- Facebook: [angle or format note]
```

## Workflow rule

```
input/ → processed/ → drafts/
```

Do not skip. Drafts must be generated from processed files, not raw input.
