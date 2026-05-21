# Rejected Patterns

This file is the evaluator's training data.
Every example below is content that must NOT pass review.

Use this file to calibrate prompts, evaluators, and reviewers.

---

## Category: AI-Slop Hooks

These openers trigger automatic rejection.

> "In today's fast-paced world..."
> "As we navigate an increasingly complex landscape..."
> "AI is transforming the way we work."
> "The future of business is here."
> "Whether you're a startup or an enterprise..."
> "Now more than ever, businesses need..."
> "Did you know that 80% of businesses fail because..."

**Why rejected:** Zero signal. Could be written by anyone, about anything, at any time.

---

## Category: Motivational Garbage

> "Your mindset is your biggest asset."
> "Success starts with a decision."
> "Small steps lead to big results."
> "You've got this."
> "The only limit is the one you set for yourself."
> "Consistency is the key to everything."

**Why rejected:** Not operational. Not specific. Not Metaxis.

---

## Category: Fake Guru Language

> "Most people don't realize this..."
> "Here's the thing nobody tells you about..."
> "I used to think X. Then I discovered Y. Now Z."
> "The secret that top performers know..."
> "One simple trick that changed everything..."

**Why rejected:** Performs insight without delivering it. Builds false authority.

---

## Category: Startup Theater

> "We're building in public."
> "Excited to share our journey!"
> "This is just the beginning."
> "We're disrupting the way teams collaborate."
> "Our mission is to democratize access to AI."

**Why rejected:** Performative, not operational. No concrete information.

---

## Category: Overexcited CTAs

> "Don't miss this!"
> "Drop a comment if you agree!"
> "Tag a friend who needs to hear this!"
> "Save this post for later!"
> "Hit follow for more tips like this!"
> "Share if this resonated with you!"

**Why rejected:** Engagement bait. Signals volume-seeking, not content quality.

---

## Category: Productivity Hype

> "10x your productivity with AI."
> "Unlock your full potential."
> "Work smarter, not harder."
> "Automate everything and reclaim your time."
> "Go from overwhelmed to unstoppable."
> "The productivity hack top CEOs swear by."

**Why rejected:** Vague promises, no operational basis, generic audience targeting.

---

## Category: Generic AI Claims

> "AI can do almost anything now."
> "ChatGPT is a game-changer for small businesses."
> "You can automate your entire workflow with AI."
> "AI tools are getting better every day."
> "The AI revolution is just getting started."

**Why rejected:** No specificity. No system. No actionable content.

---

## How to Use This File

When generating or evaluating content:
1. Check each output against these categories.
2. If any phrase, structure, or pattern matches → reject.
3. Rewrite from the source material, not from content patterns.

This file should grow as new rejected patterns are discovered in production.
