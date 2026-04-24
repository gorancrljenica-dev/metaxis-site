# Website Copy Update — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace clinical/technical copy on metaxis.io with business-outcome-focused copy aligned with Metaxis brand positioning.

**Architecture:** All visible text is managed through a single i18n file (`locales/en.json`). No component code changes needed — only content values change.

**Tech Stack:** Next.js 15, TypeScript, JSON i18n (locales/en.json)

---

## Files

- Modify: `locales/en.json` — all copy changes in one file

---

### Task 1: Update Hero copy

**Files:**
- Modify: `locales/en.json`

- [ ] **Step 1: Open the file**

Open `locales/en.json`. Find this block (lines 10–15):

```json
"hero.badge": "AI Systems & Decision Tools",
"hero.subtitle": "Building AI decision systems and automation tools.",
"hero.subtitle2": "Where intelligence meets clinical practice.",
```

- [ ] **Step 2: Replace with new copy**

```json
"hero.badge": "Operational Systems · Automation",
"hero.subtitle": "Turning inconsistent decisions and manual workflows into structured, repeatable systems.",
"hero.subtitle2": "Less guesswork. More control.",
```

- [ ] **Step 3: Verify visually**

Start dev server if not running:
```bash
npm run dev
```
Open `http://localhost:3000` — Hero should show new badge and subtitle. No "clinical practice" anywhere in hero.

- [ ] **Step 4: Commit**

```bash
git add locales/en.json
git commit -m "Update hero copy — operational systems positioning"
```

---

### Task 2: Update WhatIBuild copy

**Files:**
- Modify: `locales/en.json`

- [ ] **Step 1: Find the WhatIBuild block**

In `locales/en.json`, find:

```json
"whatibuild.description": "Systems where structured intelligence and human decision-making intersect.",
"whatibuild.card1.title": "AI Decision Support",
"whatibuild.card1.description": "ESC clinical guidelines encoded into interactive rule engines...",
"whatibuild.card2.title": "Automation Systems",
"whatibuild.card2.description": "End-to-end workflow automation for operations, communications, and data pipelines — built to scale cleanly.",
"whatibuild.card3.title": "Digital Health Tools",
"whatibuild.card3.description": "Patient-facing and clinical digital tools — screening instruments, monitoring dashboards, health applications.",
```

- [ ] **Step 2: Replace with new copy**

```json
"whatibuild.description": "Three types of operational systems — each designed to give your business clarity, consistency, and control.",
"whatibuild.card1.title": "Decision Systems",
"whatibuild.card1.description": "Structured rules and logic that make the right decision clear. No more guesswork — consistent outcomes every time a situation repeats.",
"whatibuild.card2.title": "Automation Systems",
"whatibuild.card2.description": "Manual, repetitive workflows — automated. Your team focuses on work that actually requires a human.",
"whatibuild.card3.title": "Digital Health Tools",
"whatibuild.card3.description": "Clinical decision support and monitoring tools for healthcare practitioners. Structured logic applied to patient care workflows.",
```

- [ ] **Step 3: Verify visually**

Open `http://localhost:3000` — scroll to WhatIBuild section. Three cards should show: "Decision Systems", "Automation Systems", "Digital Health Tools" with new descriptions.

- [ ] **Step 4: Commit**

```bash
git add locales/en.json
git commit -m "Update WhatIBuild copy — decision/automation/health positioning"
```

---

### Task 3: Update Contact copy

**Files:**
- Modify: `locales/en.json`

- [ ] **Step 1: Find the Contact block**

In `locales/en.json`, find:

```json
"contact.p1": "Interested in collaborating on AI systems, clinical decision support, or automation projects?",
"contact.p2": "I'm open to consulting engagements, research collaborations, and conversations about applying AI to complex decision environments.",
"contact.page.description": "Open to collaborations on AI systems, clinical decision support, and automation projects.",
"contact.page.cardTitle": "Let's work together",
"contact.page.cardIntro": "I'm particularly interested in:",
"contact.page.item1": "Clinical AI consulting",
"contact.page.item2": "Decision support architecture",
"contact.page.item3": "Healthcare automation",
"contact.page.item4": "Research collaborations",
"contact.page.item5": "Technical advisory",
```

- [ ] **Step 2: Replace with new copy**

```json
"contact.p1": "Looking to bring structure and automation to your business operations?",
"contact.p2": "Open to consulting engagements, operational system design, and conversations about solving complex process problems.",
"contact.page.description": "Open to consulting on operational systems, business automation, and decision system design.",
"contact.page.cardTitle": "Let's work together",
"contact.page.cardIntro": "I'm particularly interested in:",
"contact.page.item1": "Business process automation",
"contact.page.item2": "Decision system design",
"contact.page.item3": "Operations consulting",
"contact.page.item4": "Clinical AI & healthcare tools",
"contact.page.item5": "Technical advisory",
```

- [ ] **Step 3: Verify visually**

Open `http://localhost:3000` — scroll to Contact section. Should read "Looking to bring structure..." without any clinical-only focus. Open `http://localhost:3000/contact` and verify contact page items are updated.

- [ ] **Step 4: Commit**

```bash
git add locales/en.json
git commit -m "Update contact copy — business operations focus"
```

---

### Task 4: Update Footer tagline

**Files:**
- Modify: `locales/en.json`

- [ ] **Step 1: Find the footer block**

In `locales/en.json`, find:

```json
"footer.tagline": "Building AI systems that support human decisions.",
```

- [ ] **Step 2: Replace**

```json
"footer.tagline": "Structured systems that support human decisions.",
```

- [ ] **Step 3: Verify visually**

Open `http://localhost:3000` — scroll to footer. Should read "Structured systems that support human decisions."

- [ ] **Step 4: Final commit and push**

```bash
git add locales/en.json
git commit -m "Update footer tagline — structured systems positioning"
git push origin main
```

Vercel auto-deploys on push. Site is live within ~2 minutes.

---

## Verification Checklist

After push and deploy, open `https://metaxis.io` and confirm:

- [ ] Hero badge reads "Operational Systems · Automation"
- [ ] Hero subtitle mentions "structured, repeatable systems"
- [ ] No "clinical practice" in hero
- [ ] WhatIBuild card 1 reads "Decision Systems"
- [ ] Contact p1 reads "Looking to bring structure..."
- [ ] Footer reads "Structured systems that support human decisions."
