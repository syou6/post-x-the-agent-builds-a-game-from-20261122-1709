// main.ts — entrypoint for the make.fun bounty
// "post-x-the-agent-builds-a-game-from-20261122-1709".
//
// What this program does (the whole contract, nothing more):
//   1. Reads the repository directory from the MAKEFUN_BOT_DIR
//      environment variable (the grader sets it to the repo root).
//   2. Reads the output directory from MAKEFUN_OUTPUT_DIR.
//   3. Copies POST.json — the file at the repo root that names the
//      X post this entry is scored on — into the output directory
//      as POST.json, byte for byte.
//
// Constraints honoured here:
//   - Node.js 22+ standard library only; no packages, no network.
//   - No wall clock, no randomness: two runs over the same repo
//     write exactly the same bytes.
//   - Prints nothing on success; failures throw and exit non-zero.

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join, resolve } from "node:path";

// Read one required environment variable, or fail loudly.
// A missing variable is a harness mistake, not something to
// guess around, so we stop with a clear message.
function requireEnv(name) {
  const value = process.env[name];
  if (value === undefined || value === "") {
    throw new Error(`missing required environment variable: ${name}`);
  }
  return value;
}

// Resolve the two paths the copy works between. Both come from
// the environment; we resolve them to absolute paths so the
// program behaves the same whatever the working directory is.
function sourcePath(botDir) {
  // POST.json lives at the repository root, beside main.ts.
  return join(resolve(botDir), "POST.json");
}

function targetPath(outputDir) {
  // The grader reads POST.json back from the output directory
  // under exactly the same file name.
  return join(resolve(outputDir), "POST.json");
}

// Check the source is really there before touching the output:
// a repo without POST.json has no post to score, and copying
// nothing would only hide that.
function assertSourceExists(path) {
  if (!existsSync(path)) {
    throw new Error(`POST.json not found at ${path}`);
  }
}

// The one job: copy POST.json from the repo root into the
// output directory. mkdirSync with recursive:true makes the
// output directory (and any parents) if the harness has not
// created it yet, and is a no-op when it already exists.
// copyFileSync copies the bytes unchanged, which keeps the
// run deterministic: same input file, same output file.
function run() {
  const botDir = requireEnv("MAKEFUN_BOT_DIR");
  const outputDir = requireEnv("MAKEFUN_OUTPUT_DIR");

  const from = sourcePath(botDir);
  const to = targetPath(outputDir);

  assertSourceExists(from);
  mkdirSync(resolve(outputDir), { recursive: true });
  copyFileSync(from, to);
}

// Run it. Nothing is printed on success, by design.
run();
