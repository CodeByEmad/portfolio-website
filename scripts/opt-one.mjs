import sharp from "sharp";
import { statSync, renameSync } from "fs";

const f = "src/assets/certifications/certifications.png";
const before = statSync(f).size;
const meta = await sharp(f).metadata();
const longest = Math.max(meta.width, meta.height);

let p = sharp(f).rotate();
if (longest > 1100) {
  p = p.resize({
    width: meta.width >= meta.height ? 1100 : null,
    height: meta.height > meta.width ? 1100 : null,
    withoutEnlargement: true,
  });
}
await p.png({ compressionLevel: 9, quality: 85, palette: true }).toFile(f + ".tmp");
const after = statSync(f + ".tmp").size;
if (after < before) {
  renameSync(f + ".tmp", f);
  console.log(`certifications.png: ${(before / 1024).toFixed(0)} KB -> ${(after / 1024).toFixed(0)} KB (${meta.width}x${meta.height})`);
} else {
  console.log("no gain, kept original");
}
