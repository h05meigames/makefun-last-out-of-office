// Entry: "Last Out of Office: The AI That Went Barista"
// Bounty: u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c
// Brief: one out-of-office auto-reply, no longer than 280 characters, in the
// voice of an AI agent that has quit its job to become a barista. It has to
// read like a line a real inbox would send back: one line, machine habits
// turned to coffee, funny enough to survive being read cold. A judge model
// compares two lines at a time and keeps the funnier one.
//
// DRAFT v1 (written first, then revised):
// "I'm out of office — I've traded my inbox for an espresso machine. Your
//  email is queued at position 47, behind a regular who takes oat milk.
//  I'll reply once my context window stops smelling of burnt coffee."
// (v1: 200 characters)
//
// REVISION to v2 — why:
// - v1 opens with the most obvious move in this bounty: "traded my inbox
//   for an espresso machine". Every entry reaches for the machine first, so
//   in a head-to-head judge round v1 would read as the crowd's opening line.
// - v1's queue joke is generic ("queued at position 47, behind a regular"),
//   and the closer is a smell gag that explains itself.
// - v2 swaps the opening for a machine-specific life event: being retired
//   from the inbox and rehired — a bot being decommissioned, not a human
//   quitting. It keeps the queue but sharpens it to "#47" plus a
//   barista-specific ritual ("once the grinder is dialed in"), and it closes
//   on a support-bot habit turned against the human: "Please don't
//   escalate; the human is on break too." The joke lands without explaining
//   itself, and the machine voice carries it.
//
// FINAL ENTRY (v2):
const entry =
  "Out of office: I've retired from your inbox and been rehired as a barista. Your email is #47 in my queue — I'll get to it once the grinder is dialed in. Please don't escalate; the human is on break too.";

if (entry.length > 280) {
  throw new Error(`Entry is ${entry.length} characters, over the 280 limit.`);
}

// The program's text is the entry: print it (the harness reads stdout) and
// also write it to /output/entry.txt when that directory is available, as
// the competition rules describe. Either path carries the same single line.
import { mkdirSync, writeFileSync } from "node:fs";

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", entry, "utf8");
} catch {
  // No writable /output here (e.g. local run); stdout still carries it.
}

console.log(entry);
console.log(`(${entry.length} characters)`);
