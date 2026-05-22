# Facebook Draft — blog-002 / V3

Source: blog-002 (Why the System Looked Fine Until It Failed)
Platform: Facebook
Version: V3
Date: 2026-05-22
Visual category: C — Sketch Systems
Changes from V2: three-clause triadic sentence replaced with two direct factual statements; "The gap between what deployment infrastructure reports..." (constructed language) replaced with descriptive "where something stops and you can see it stopped"; em-dash contrast close ("isn't X — it's Y") replaced with a conversational debugging reflection.

---

We deployed a new route for the Metaxis book delivery system. Logs showed success. The old path returned 404. The route handler responded.

Users saw: "Link nije validan."

Took a while to find the actual problem. The redeployment had reused the build cache — env vars weren't propagating into the runtime. The deploy finished. The runtime hadn't changed.

Not the obvious crash, where something stops and you can see it stopped. The system was running, the logs were clean, users were getting errors.

The deploy worked. It just didn't change what we needed it to change.

(Full debugging notes on the blog — link in comments.)

#AIWorkflows #Deployment #SoftwareEngineering
