---
status: reviewed
sprint: 1-v3
source: blog-001_processed.md
reviewed: 2026-05-21
reviewed_by: self (evaluator)
focus: structural predictability, editorial variability, AI fingerprint reduction
compares: v2 → v3
---

# Sprint 1 V3 Review — blog-001

V3 goal was fingerprint reduction, not quality improvement. Review evaluates that specifically.

---

## LinkedIn — v2 vs v3

**Structural changes:**
- Control flow definition moved: it now appears AFTER the phases, not before. In V2, the sequence was claim → definition → phases. In V3: claim → phases → stop condition → definition → close. Minor reordering, but it means the reader encounters the phases before being told what they're collectively called.
- Setup sentence removed: V2 had "The minimum structure that provides it:" before the phases. V3 shortens this to "The minimum structure: Think → Act → Verify." — tighter, less explanatory.
- Phase language: "The constraint is intentional — it's what makes the loop correctable" → "That constraint is what makes each step correctable." Removes the word "intentional" which read as pointing at a design decision for emphasis — a subtle teach-to-the-reader move.
- Stop condition phrasing: "Both outcomes look identical from the outside" → "You usually can't tell which until you audit the results." The second is colloquial mid-clean-prose — a rhythm break.
- Closing: V2's "An AI that answers a question and an AI that completes a task are different systems. The loop is what makes the second one work." → V3's "The difference between an AI that answers questions and one that completes tasks isn't the model. It's whether there's a loop, and whether that loop knows when to stop." V3 is slightly stronger — it adds the stop condition specificity and frames the contrast as a single question rather than a two-sentence declaration.

**Did structural predictability decrease?**
Partially. The reordering (phases before definition) is a small disruption to the "explain-then-show" teaching pattern. The colloquial stop condition phrasing is the most genuine rhythm break in the post — it shifts register briefly, then returns to clean prose.

The bold phase structure remains identical. This is the dominant AI fingerprint in the post. Removing or varying it would break the format more than any wording change, but it would also reduce LinkedIn scan-readability. That's the tradeoff the pipeline hasn't resolved yet.

**Does the post feel coherent?**
Yes. The reordering is subtle enough that readers won't notice the sequence changed — they'll just find the post slightly less explanatory-feeling.

**What AI fingerprints remain?**
- **Bold phase labels with one-line definitions** — the most persistent fingerprint. Three bold labels, each followed by a dash and a short description, is the visual signature of AI-generated educational content on LinkedIn. It's also effective for this content type. Removing it would reduce the fingerprint but also reduce utility.
- **Clean paragraph rhythm** — every paragraph is one idea, one or two sentences, clean break. Human writers occasionally leave a thought unresolved, interrupt themselves, or use longer compound sentences. None of that is here.
- **"That constraint is what makes each step correctable"** — still slightly textbook. Could be: "One action at a time. That's the only way to know what broke when something breaks." But this gets closer to rewriting, which is V4 territory.

**Did edits improve realism or damage clarity?**
Improved realism, no damage. The colloquial "you usually can't tell which until you audit the results" is the best line added in V3 — it's the most human-sounding sentence in any version of this post. The reordering is neutral on clarity.

**Verdict:** Pass. V3 is the strongest LinkedIn version. It has V2's clean entry, a rhythm break mid-post, and a sharper close. The phase structure is still templatey but is a known tradeoff.

---

## Facebook — v2 vs v3

**Structural changes:**
- Parenthetical glosses removed: "Think (plan the next move), Act (execute one thing), Verify (check the result before continuing)" → "Think, Act, Verify."
- Framework + verify explanation merged: V2 had two separate movements — first introduced the framework with glosses, then flagged the verify step as what gets skipped. V3 does this in one sentence: "Most setups skip the verify step — running forward without checking whether the last action actually worked."
- Directional flag removed: "That last part — verify before moving forward — is what most setups skip" was a pattern that pointed at the framework and told the reader where to look. Gone in V3.

**Did structural predictability decrease?**
Slightly. The post is shorter and more direct. Removing the glosses and the directional flag makes the writing feel more like someone describing a real problem than someone explaining a framework to an audience.

**Does the post feel coherent?**
Yes. The merged sentence works. Nothing is lost — the reader who doesn't know Think/Act/Verify will follow it from context; the reader who does will appreciate not being over-explained.

**What AI fingerprints remain?**
- **The whole arc** — scenario → diagnosis → framework → missing element → quotable line → link. This is still a formula. For Facebook, it's the right formula. But it means the post is predictable in structure even if not in word choice.
- **"The gap is usually control flow"** — slightly over-clean as a concluding insight. A human might say "and almost every time, it's the same missing piece." But this risks being more vague, not less AI-sounding.
- **"exits early and looks finished when it isn't"** — this is good. Real operational phrasing. Keep.

**Did edits improve realism or damage clarity?**
Improved realism. The post trusts the reader more. Nothing was damaged — if a reader doesn't know "Think, Act, Verify," the sentence that follows explains the verify step anyway.

**Verdict:** Pass. Facebook V3 is cleaner and more direct than V2. Ready for human approval.

---

## V3 Comparative Assessment

**LinkedIn V3:** Best LinkedIn version. Meaningful structural evolution across V1→V2→V3. The bold phase structure is the remaining fingerprint to address in Sprint 2 or when enough posts exist to test a non-structured format.

**Facebook V3:** Cleanest Facebook version. The improvement is word-level, not structural. The arc formula is the remaining pattern, but it's platform-appropriate so removal is not the right goal.

**What V3 did not solve:**
1. The bold phase label format on LinkedIn
2. The clean paragraph rhythm (no compound sentences, no interruptions, no unresolved thoughts)
3. The post arc formula on Facebook (scenario → diagnosis → framework → missing element → quotable → link)

**What V3 did solve:**
1. V1's summarizing closer on all platforms
2. V1's landing statement pattern on Instagram
3. V2's soft LinkedIn close
4. The parenthetical over-explanation on Facebook
5. The "both outcomes look identical" over-clean phrasing on LinkedIn

---

## Sprint 1 Completion Assessment

From pipeline perspective — what's done:

| Item | Status |
|---|---|
| All three platforms have a reviewable draft | ✅ |
| Instagram V2 passed review without conditions | ✅ |
| LinkedIn V3 passed review | ✅ |
| Facebook V3 passed review | ✅ |
| EXAMPLES library populated (GOOD + BAD + BEFORE_AFTER) | ✅ |
| Self-review completed at each version | ✅ |
| V3 structural fingerprint work documented | ✅ |
| Human reviewer sign-off | ❌ (outside pipeline scope) |

**Recommendation:** Sprint 1 is complete from a generation and review standpoint. The only remaining item is human approval before any post moves to approved/. That is not a pipeline failure — it is the correct final gate.

Sprint 2 should not start until a human has reviewed and approved at least Instagram V2 and one of the LinkedIn versions. The evaluator work in Sprint 2 depends on knowing what passed human review, not just self-review.
