import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const src = join(botDir, "POST.json");
const dest = join(outDir, "POST.json");

try {
  mkdirSync(outDir, { recursive: true });
  copyFileSync(src, dest);
} catch (err) {
  console.error(`failed to copy ${src} to ${dest}: ${err}`);
  process.exit(1);
}
