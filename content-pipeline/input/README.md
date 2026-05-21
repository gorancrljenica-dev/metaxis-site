# input/

Raw source material. Human-provided only.

## What belongs here

- Blog posts (markdown or plain text)
- Ebook excerpts
- Operational notes
- Meeting/session transcripts
- Manually pasted content

## What does NOT belong here

- Auto-fetched URLs
- RSS or crawler output
- Scraped web content
- Auto-generated summaries
- Processed or edited versions of source files

V1 uses manual input only.
Transformation quality must be calibrated before ingestion complexity is added.

## Naming convention

```
blog-001.md
ebook-002.md
ops-note-003.md
transcript-004.md
```

Stable numeric suffixes improve evaluator reproducibility.
Do not use dates as primary identifiers — use type + sequence.

## Workflow rule

Files placed here move forward only:

```
input/ → processed/
```

Do not edit files here after they have been processed.
If source material changes, create a new file.

## Examples

See `examples/example-blog.md` for a reference input file.
