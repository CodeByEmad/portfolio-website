import sharp from "sharp";
import { readdirSync, statSync, renameSync } from "fs";
import { join, extname } from "path";

const ASSETS = "src/assets";
const MAX_SIDE = 1000; // longest edge; plenty for the sizes we display
const MIN_BYTES = 400 * 1024; // only touch files larger than ~400 KB

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) out.push(...walk(full));
    else out.push({ path: full, size: st.size });
  }
  return out;
}

const targets = walk(ASSETS).filter(
  (f) => /\.(png|jpe?g)$/i.test(f.path) && f.size > MIN_BYTES
);

let savedTotal = 0;

for (const { path, size } of targets) {
  const ext = extname(path).toLowerCase();
  const tmp = path + ".tmp";
  const img = sharp(path);
  const meta = await img.metadata();
  const longest = Math.max(meta.width || 0, meta.height || 0);

  let pipeline = sharp(path).rotate();
  if (longest > MAX_SIDE) {
    pipeline = pipeline.resize({
      width: meta.width >= meta.height ? MAX_SIDE : null,
      height: meta.height > meta.width ? MAX_SIDE : null,
      withoutEnlargement: true,
    });
  }

  if (ext === ".png") {
    pipeline = pipeline.png({ compressionLevel: 9, quality: 82, palette: true });
  } else {
    pipeline = pipeline.jpeg({ quality: 78, mozjpeg: true });
  }

  await pipeline.toFile(tmp);
  const newSize = statSync(tmp).size;

  if (newSize < size) {
    renameSync(tmp, path);
    savedTotal += size - newSize;
    console.log(
      `${path}: ${(size / 1024).toFixed(0)} KB -> ${(newSize / 1024).toFixed(0)} KB`
    );
  } else {
    // optimization didn't help — keep original
    renameSync(tmp, path + ".discard");
    console.log(`${path}: kept original (no gain)`);
  }
}

console.log(`\nTotal saved: ${(savedTotal / 1024 / 1024).toFixed(2)} MB`);
