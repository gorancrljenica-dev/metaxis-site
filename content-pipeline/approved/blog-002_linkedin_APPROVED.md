# LinkedIn Draft — blog-002 / V2

Source: blog-002 (Why the System Looked Fine Until It Failed)
Platform: LinkedIn
Version: V2
Date: 2026-05-22
Visual category: B — Operational Screens
Changes from V1: "technically functional / operationally misleading" elevated to standalone anchor; AI systems paragraph condensed; final explanatory paragraph cut; ends on diagnostic question.

---

The deployment finished. Logs were clean. Old URL returned 404. Route handler responded.

Users still saw: "Link nije validan."

We went through the obvious checks — wrong environment, missing config, bad path. Everything came back correct.

The actual problem was build cache state. The redeployment had reused the previous build cache, which meant environment variables weren't propagating into the production runtime.

The code was correct. The deployment was successful. The system failed operationally.

Technically functional. Operationally misleading.

This matters most in AI and automation systems, where a workflow can keep generating outputs and updating logs long after the control logic has stopped working correctly. The system looks operational. The gap doesn't surface until someone audits the loop.

The diagnostic question we use now: not "did it deploy?" but "did the system state actually change the way we think it did?"

Full breakdown on the blog — link in comments.

#AIWorkflows #Deployment #DebuggingInProduction
