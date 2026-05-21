# Production Systems Don't Care About Your Roadmap

We deployed a content generation pipeline last week. Worked fine in staging.

First run in production: the model returned valid JSON, the parser accepted it, and the output file was written — but to the wrong directory. The filename matched the expected pattern. The path did not. No error raised.

This is the normal failure mode of automated systems: not crashes, but quiet drift. The system does what it was told, not what you intended.

Three things that would have caught this earlier:

**1. Output validation at the gate, not at the destination.**
The generation step wrote the file. The downstream step expected it somewhere else. Both steps succeeded individually. The gap between them was the actual failure point.

**2. Explicit path contracts, not assumed conventions.**
We had documented the output directory. We had not enforced it. There is a difference between a convention and a constraint. Convention is what you hope happens. Constraint is what the system requires.

**3. A test that runs end-to-end, not just unit-level.**
The unit tests passed. The integration test would have caught this in one run. We had not written the integration test because the pipeline was "simple enough."

Simple enough is where most production failures live.

The fix took four minutes. The lesson is the same one that keeps appearing: build the verification layer before you trust the generation layer. In automation, the generation is the easy part. The hard part is knowing whether what was generated is what you actually needed.
