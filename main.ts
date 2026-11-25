import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const src = join(botDir, "POST.json");
const dest = join(outDir, "POST.json");

// The house reads the post itself from this URL, so a bad link here
// would silently submit a dead entry. Refuse anything that is not an
// https X/Twitter status URL before copying.
const post = JSON.parse(readFileSync(src, "utf8"));
const url = typeof post?.url === "string" ? post.url : "";
if (!/^https:\/\/(x\.com|twitter\.com)\/[^/]+\/status\/\d+/.test(url)) {
  console.error(`refusing to submit: POST.json url is not an X status URL: ${url}`);
  process.exit(1);
}

try {
  mkdirSync(outDir, { recursive: true });
  copyFileSync(src, dest);
  console.log(`copied ${src} to ${dest} (${url})`);
} catch (err) {
  console.error(`failed to copy ${src} to ${dest}: ${err}`);
  process.exit(1);
}
