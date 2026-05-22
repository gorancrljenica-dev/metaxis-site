# Facebook Draft — blog-002 / V2

Source: blog-002 (Why the System Looked Fine Until It Failed)
Platform: Facebook
Version: V2
Date: 2026-05-22
Visual category: C — Sketch Systems
Changes from V1: three-beat "The code was right. The deployment showed success." structure replaced with continuous explanation; "This is a condition that's easy to miss." cut; close made more conversational and first-person.

---

We deployed a new route for the Metaxis book delivery system. Logs showed success. The old path returned 404. The route handler responded.

Users saw: "Link nije validan."

We went through the obvious checks — wrong environment, missing config, bad path. All were correct. We eventually traced it to build cache state: the redeployment had reused the previous cache, so env vars weren't propagating into the runtime. The code was right, the deployment had completed, and the production runtime was still running the old configuration.

Not the obvious crash — those surface quickly. The gap between what deployment infrastructure reports and what the user actually experiences tends to stay invisible until you specifically look for it.

The check we run now isn't "did it deploy?" — it's whether the system state actually changed, or just the deployment status.

(Full debugging notes on the blog — link in comments.)

#AIWorkflows #Deployment #SoftwareEngineering
