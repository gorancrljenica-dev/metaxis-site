# Visual Concepts — blog-002

Source: blog-002 (Why the System Looked Fine Until It Failed)
Date: 2026-05-22

---

## Platform Visual Assignments

| Platform  | Category | Direction | Accent |
|-----------|----------|-----------|--------|
| LinkedIn  | B — Operational Screens | Deployment divergence artifact | Desaturated cyan #4A9E9E or electric blue #3D6FA8 |
| Instagram | D — Human Context | Debugging environment in context | No accent, or muted crimson #8F2D2D |
| Facebook  | C — Sketch Systems | Two-column divergence diagram | Warm orange #D4703A |

DO NOT use amber (#C9862A) — used in Cycle 001 LinkedIn.
DO NOT use Category A for LinkedIn — used in Cycle 001.
DO NOT use carousel format for Instagram — used in Cycle 001.
DO NOT use notebook/desk setup for Facebook — used in Cycle 001.

---

## LinkedIn — Category B: Operational Screens

**Direction:**
The visual captures the deployment divergence artifact — what the infrastructure showed versus what the user experienced.

**Option 1 (preferred):**
Two-panel dark background composition.
- Left panel: deployment success state. Terminal or Vercel-style indicators: "Deployment: ✓", "Build: ✓", "Routes: live". Clean, green-ish text on dark.
- Right panel: user-facing state. Browser-style frame showing: "Link nije validan." in the product's error styling.
- One accent mark (cyan or blue) pointing to the gap between the two panels.

**Option 2:**
A single terminal output screenshot or dark-background log visualization with one annotated section — the line where env vars should have been but weren't. Minimal annotation. Real-looking artifact.

**What to avoid:**
- Typography overlay or quote card (Category A — already used Cycle 001)
- Any "AI brain" or network visualization
- Stock "code on laptop" imagery
- Polished infographic layout

**Dimensions:** 1200×627 or 1080×1080.
**Test:** Must be legible at mobile feed render size. Contrast between the two panels must read clearly at thumbnail scale.

---

## Instagram — Category D: Human Context

**Direction:**
Real environment photo or screenshot showing the debugging moment. The visual anchors the post in operational reality — a person looking at a screen where something is wrong.

**Option 1 (preferred):**
A real screenshot of the Vercel deployment dashboard showing "Deployment successful" alongside a browser window showing the error state. If this screenshot exists, it is the strongest choice — it is the actual artifact from the event.

**Option 2:**
Desktop or laptop in context: a real work screen showing the terminal, code editor, or browser during the debugging process. Screen should show real content, not staged work. Monitor visibility is the point — the viewer sees what you were looking at.

**Option 3 (backup — Category A):**
If no real environment imagery is appropriate, fall back to Category A:
Single dark card, statement:
"technically functional.
operationally misleading."
Monospace or geometric sans font. No amber accent. No decorative elements.
Accent if any: muted crimson #8F2D2D or none.

**What to avoid:**
- Carousel format (used in Cycle 001 Instagram)
- Sketch/hand-drawn style (used in Cycle 001 Instagram)
- Quote card format
- Staged "productivity" desk setup

**Dimensions:** 1080×1080 (square preferred) or 1080×1350 (portrait 4:5).
**Test:** First frame must communicate something specific. If using a screenshot, text must be legible at mobile feed size.

---

## Facebook — Category C: Sketch Systems

**Direction:**
A hand-drawn or sketch-style two-column diagram showing the divergence between deployment state and operational reality. Should look like something drawn on a whiteboard while explaining the bug.

**Layout:**
Left column — "What deployment showed":
- ✓ Deployment complete
- ✓ Routes live
- ✓ 404 on old path
- ✓ Build finished

Right column — "What was actually true":
- Build cache reused
- Env vars not propagated
- Users get error
- System state unchanged

**Connecting element:**
A simple hand-drawn arrow or gap between the two columns indicating the divergence. One accent mark (warm orange #D4703A) on the connecting element only.

**Aesthetic:**
- Rough, not polished
- Monospace or handwritten-style labels
- Whiteboard-on-dark or notebook-on-light
- Should look like a working diagram, not a branded graphic

**What to avoid:**
- Notebook/desk photo (used in Cycle 001 Facebook)
- Polished infographic
- Typography card
- Any AI brain/neural network imagery

**Dimensions:** 1200×630 or 1080×1080.
**Test:** The two-column structure must read clearly at mobile feed size. Column labels must be legible without zooming.

---

## Visual Fatigue Check

Cycle 001 used: A (LinkedIn), C (Instagram), B/D (Facebook).
Cycle 002 uses: B (LinkedIn), D (Instagram), C (Facebook).

No category repeated on any platform across cycles. ✓
Amber accent not used. ✓
Carousel format not used. ✓
Notebook/desk not used for Facebook. ✓

---

## Production Note

Do not produce visuals until captions are human-approved.
Visual direction may shift based on final approved caption tone.
If V2 or V3 changes the content focus significantly, revisit the visual assignment before production.
