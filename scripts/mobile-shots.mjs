import { chromium, devices } from "playwright";
import { mkdirSync } from "fs";

const URL = "http://localhost:3000";
const OUT = "scripts/shots";
mkdirSync(OUT, { recursive: true });

const sections = ["hero", "about", "technologies", "experience", "projects", "certifications", "contact"];

const profiles = [
  { name: "iphone", device: devices["iPhone 13"] },
  { name: "android", device: devices["Pixel 7"] },
];

const browser = await chromium.launch();

for (const { name, device } of profiles) {
  const context = await browser.newContext({ ...device });
  const page = await context.newPage();
  await page.goto(URL, { waitUntil: "load" });
  await page.waitForTimeout(1500);

  // Full page
  await page.screenshot({ path: `${OUT}/${name}-full.png`, fullPage: true });

  // Each section
  for (const id of sections) {
    const el = await page.$(`#${id}`);
    if (!el) continue;
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(700);
    await el.screenshot({ path: `${OUT}/${name}-${id}.png` }).catch(() => {});
  }

  const vw = device.viewport;
  console.log(`${name} (${vw.width}x${vw.height}) captured`);
  await context.close();
}

await browser.close();
console.log("done");
