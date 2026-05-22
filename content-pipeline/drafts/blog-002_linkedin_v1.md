# LinkedIn Draft — blog-002 / V1

Source: blog-002 (Why the System Looked Fine Until It Failed)
Platform: LinkedIn
Version: V1
Date: 2026-05-22
Visual category: B — Operational Screens

---

The deployment finished. Logs were clean. Old URL returned 404. Route handler responded.

Users still saw: "Link nije validan."

We went through the obvious checks — wrong environment, missing config, bad path. Everything came back correct.

The actual problem was build cache state. The redeployment had reused the previous build cache, which meant environment variables weren't propagating into the production runtime.

The code was correct. The deployment was successful. The system failed operationally.

Technical success and operational reality are not the same condition. They look identical in a deployment log. The divergence only surfaces when you check what a user actually experiences — not what the infrastructure reports.

This is where AI and automation systems become particularly dangerous. Outputs keep generating. Logs update. The workflow moves forward. Nothing flags. The control logic could have stopped making sense several steps ago, and the system will continue to look operational until someone actually audits the loop.

The diagnostic question we use now: not "did it deploy?" but "did the system state actually change the way we think it did?"

That question is harder to answer automatically — it requires a verification step that checks operational reality, not just deployment status.

Full breakdown on the blog — link in comments.

#AIWorkflows #Deployment #DebuggingInProduction
