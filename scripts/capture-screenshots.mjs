import { chromium } from 'playwright';
import { mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'docs', 'images');
const baseUrl = 'http://localhost:5173';

const shots = [
  { name: 'site-home.png', url: '/', waitFor: '.hero' },
  { name: 'site-quem-somos.png', url: '/quem-somos', waitFor: '.historiabg' },
  { name: 'site-turmas.png', url: '/turmas', waitFor: '.section-container' },
  { name: 'site-pais.png', url: '/pais', waitFor: '.pais-header-bg' },
];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

for (const shot of shots) {
  await page.goto(`${baseUrl}${shot.url}`, { waitUntil: 'networkidle' });
  if (shot.waitFor) {
    await page.waitForSelector(shot.waitFor, { timeout: 10000 });
  }
  await page.waitForTimeout(800);
  await page.screenshot({
    path: path.join(outDir, shot.name),
    fullPage: false,
  });
  console.log(`Saved ${shot.name}`);
}

// Home sections for README grid
await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle' });
await page.waitForSelector('.hero', { timeout: 10000 });
await page.screenshot({ path: path.join(outDir, 'preview-1.jpg'), type: 'jpeg', quality: 85 });

await page.evaluate(() => document.getElementById('diferenciais')?.scrollIntoView());
await page.waitForTimeout(600);
await page.screenshot({ path: path.join(outDir, 'preview-2.jpg'), type: 'jpeg', quality: 85 });

await page.evaluate(() => document.getElementById('turmas')?.scrollIntoView());
await page.waitForTimeout(600);
await page.screenshot({ path: path.join(outDir, 'preview-3.jpg'), type: 'jpeg', quality: 85 });

await page.evaluate(() => document.getElementById('contato')?.scrollIntoView());
await page.waitForTimeout(600);
await page.screenshot({ path: path.join(outDir, 'preview-4.jpg'), type: 'jpeg', quality: 85 });

console.log('Saved preview-1..4.jpg');

await browser.close();
