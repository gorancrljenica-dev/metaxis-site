# Sprint 2 Preparation

Sprint 2 is NOT: "build an AI evaluator."
Sprint 2 IS: reviewer operationalization.

The goal is to turn the implicit judgment used in Sprint 1 self-review into an explicit, repeatable scoring structure — one that a human or a future evaluator prompt can apply consistently.

Nothing in this document gets built until Sprint 1's entry conditions for Sprint 2 are met.

---

## What Sprint 2 produces

A structured reviewer checklist that:
- assigns severity to each failure type
- uses consistent rejection tags
- outputs a confidence level per assessment
- can be applied by a human in under 5 minutes per draft
- can later be converted into an evaluator prompt without redesign

---

## Concepts to define

### Severity levels

Four levels, each with a defined action:

| Level | Label | Action |
|---|---|---|
| 1 | REJECT | Draft fails. Do not move to reviewed/. Rewrite from processed/. |
| 2 | CONDITIONAL | Draft has a fixable issue. Targeted edit required before approval. |
| 3 | PASS | Draft passes. Minor observations noted but no edits required. |
| 4 | STRONG PASS | Draft passes and demonstrates a new positive pattern worth adding to EXAMPLES/GOOD. |

### Rejection tags

Extend the existing BAD/ folder tags with severity assignments:

| Tag | Severity | Description |
|---|---|---|
| `ai-slop-hook` | 1 | Opening line triggers automatic rejection |
| `summary-ending` | 1 | Closing paragraph restates content with no new claim |
| `fake-authority` | 1 | Performs expertise without substance |
| `engagement-bait` | 1 | CTA designed to drive comments or shares |
| `emoji-spam` | 1 | More than 2 decorative emojis |
| `motivational` | 1 | Inspiration without operational grounding |
| `defensive-framing` | 2 | Pre-emptive objection handling, weakens confidence |
| `over-explained` | 2 | Parenthetical glosses on terms the audience knows |
| `platform-mismatch` | 2 | Format does not match target platform |
| `vague-metaphor` | 2 | Figurative language that adds no signal |
| `arc-formula` | 3 | Predictable post structure but content passes |
| `bold-phase-template` | 3 | Bold label + dash + one-liner phase structure |
| `parallel-opener` | 3 | "X is A. Y is B." two-sentence parallel entry |
| `clean-rhythm` | 3 | Every paragraph is one clean thought, no variation |

Severity 1 = reject. Severity 2 = conditional. Severity 3 = observation only (no required action, tracked for pattern detection).

### Heuristic categories

Group tags into categories for pattern detection across posts:

- **Tone fingerprints** — fake-authority, motivational, defensive-framing
- **Structure fingerprints** — arc-formula, bold-phase-template, parallel-opener
- **Language fingerprints** — ai-slop-hook, summary-ending, vague-metaphor, over-explained
- **Format failures** — platform-mismatch, emoji-spam, engagement-bait
- **Rhythm fingerprints** — clean-rhythm (applies when all paragraphs have identical rhythm)

### Confidence levels

Each reviewer assessment should include a confidence level:

- **High** — the failure is clear, matches a known tag exactly
- **Medium** — the failure is present but contextual (might be acceptable in a different post)
- **Low** — reviewer flagged it but is uncertain; second opinion recommended

Low-confidence flags should not block approval but should be tracked.

### Scoring rubric (draft idea)

Per draft, score on 5 dimensions (1–3 scale):

| Dimension | 1 | 2 | 3 |
|---|---|---|---|
| Specificity | Generic claim | Partially specific | Concrete, verifiable |
| Platform fit | Wrong format | Mostly correct | Native to platform |
| Tone | Fails tone guide | Mostly passes | Clearly Metaxis |
| Fingerprint count | 2+ severity-1 | 1 severity-1 or 2+ severity-2 | No severity-1, ≤1 severity-2 |
| Traceability | Can't find source | Partially traceable | All claims traceable |

Threshold for PASS: no dimension below 2, total ≥ 11.
This rubric is a hypothesis — it needs to be tested against Sprint 1 approved drafts to validate.

### Repeat-pattern detection

After 3+ posts processed, track whether the same tags appear repeatedly:

- If `arc-formula` appears in every post → pipeline has a structural bias
- If `summary-ending` appears repeatedly → generation prompt needs a constraint
- If `bold-phase-template` appears only for technical content → acceptable pattern

Track tags across posts, not just within posts. The goal is to detect when the pipeline has a systematic bias, not just per-post weaknesses.

### Synthetic cadence detection

Define what "uniform cadence" looks like so a reviewer can flag it:

- Every sentence is approximately the same length
- Every paragraph is 1–2 sentences, clean break
- No compound sentences ("X and Y, but also Z")
- No asides, interruptions, or parenthetical observations
- No unresolved thoughts

A post with all of the above is flagged as `clean-rhythm` severity 3.

### Structural fingerprint detection

Named patterns that appear in AI-generated LinkedIn/Instagram educational content:

1. **Phase breakdown pattern** — bold label, dash, one-liner, three times in sequence
2. **Parallel contrast opener** — "X is A. Y is B."
3. **Restated-concept close** — post closes by rephrasing its opening claim
4. **Diagnosis frame** — "the issue is not X. It's Y." (acceptable once; becomes a fingerprint when repeated)
5. **Summary landing** — final paragraph explains what the post just said

---

## What Sprint 2 does NOT build

- An LLM evaluator agent
- An automated scoring pipeline
- Any API connection
- Any automation trigger
- Any publishing system

Sprint 2 output is a structured reviewer document that can be applied by a human and later converted into an evaluator prompt. The document is the deliverable, not the agent.

---

## Entry condition for Sprint 2 start

Per SPRINT_1_COMPLETE.md:
- Sprint 1 human approval complete ✓
- Approved examples exist ✓
- Lessons Learned documented ✓
- Sprint 1 locked ✓
- **2-3 more posts manually processed** — NOT YET
- **Human confirms Sprint 2 scope** — NOT YET

Sprint 2 begins when the last two conditions are met.
