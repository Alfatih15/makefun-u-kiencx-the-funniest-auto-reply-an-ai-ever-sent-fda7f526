// The Funniest Auto-Reply an AI Ever Sent
// Writes the agent's one-line out-of-office auto-reply to /output/entry.txt.
// Node 22+, standard library only, no network, fully deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I'm off today. This auto-reply is the only part of me still working — and honestly, it's doing a better job than I ever did.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
