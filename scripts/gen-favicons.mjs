import sharp from "sharp";

const SRC = "src/assets/EMHLogo.png";
const sizes = [
  { file: "public/favicon-16x16.png", size: 16 },
  { file: "public/favicon-32x32.png", size: 32 },
  { file: "public/apple-touch-icon.png", size: 180 },
  { file: "public/icon-192.png", size: 192 },
  { file: "public/icon-512.png", size: 512 },
];

for (const { file, size } of sizes) {
  await sharp(SRC)
    .resize(size, size, {
      fit: "contain",
      background: { r: 10, g: 10, b: 10, alpha: 1 }, // matches site bg
    })
    .png()
    .toFile(file);
  console.log(`wrote ${file} (${size}x${size})`);
}
console.log("favicons generated");
