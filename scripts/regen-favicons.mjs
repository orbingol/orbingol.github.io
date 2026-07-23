import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const publicDir = process.env.FAVICON_DIR || "/work";
const srcSvg = path.join(publicDir, "favicon.svg");

if (!fs.existsSync(srcSvg)) {
  console.error(`Missing ${srcSvg}. Mount public/ (or set FAVICON_DIR).`);
  process.exit(1);
}

// Prefer DejaVu for consistent rasterization inside the container.
const svg = fs
  .readFileSync(srcSvg, "utf8")
  .replaceAll(
    "Helvetica Neue, Helvetica, Arial, DejaVu Sans, sans-serif",
    "DejaVu Sans",
  )
  .replaceAll("Helvetica Neue, Helvetica, Arial, sans-serif", "DejaVu Sans");

const out16 = path.join(publicDir, "favicon-16.png");
const out32 = path.join(publicDir, "favicon-32.png");
const outApple = path.join(publicDir, "apple-touch-icon.png");
const outIco = path.join(publicDir, "favicon.ico");

await sharp(Buffer.from(svg)).resize(16, 16).png().toFile(out16);
await sharp(Buffer.from(svg)).resize(32, 32).png().toFile(out32);
await sharp(Buffer.from(svg)).resize(180, 180).png().toFile(outApple);
fs.writeFileSync(outIco, await pngToIco([out16, out32]));

console.log(
  "Regenerated favicon-16.png, favicon-32.png, favicon.ico, apple-touch-icon.png",
);

const ogSvgPath = path.join(publicDir, "og-default.svg");
const ogPngPath = path.join(publicDir, "og-default.png");
if (fs.existsSync(ogSvgPath)) {
  await sharp(ogSvgPath).resize(1200, 630).png().toFile(ogPngPath);
  console.log("Regenerated og-default.png");
}
