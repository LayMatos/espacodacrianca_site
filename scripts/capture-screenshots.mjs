import { chromium } from 'playwright';
import { mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'docs', 'images');
const baseUrl = 'http://localhost:5173';

const DESKTOP = { width: 1440, height: 900 };
const MOBILE = { width: 390, height: 844 };

const pageShots = [
  { name: 'site-home.png', url: '/', waitFor: '.hero' },
  { name: 'site-quem-somos.png', url: '/quem-somos', waitFor: '.historiabg' },
  { name: 'site-turmas.png', url: '/turmas', waitFor: '.section-container' },
  { name: 'site-pais.png', url: '/pais', waitFor: '.pais-header-bg' },
];

const mobilePageShots = [
  { name: 'mobile-home.jpg', url: '/', waitFor: '.hero' },
  { name: 'mobile-quem-somos.jpg', url: '/quem-somos', waitFor: '.historiabg' },
  { name: 'mobile-turmas.jpg', url: '/turmas', waitFor: '.section-container' },
  { name: 'mobile-pais.jpg', url: '/pais', waitFor: '.pais-header-bg' },
];

async function screenshot(page, filename, options = {}) {
  const filePath = path.join(outDir, filename);
  const ext = path.extname(filename).slice(1);
  await page.screenshot({
    path: filePath,
    type: ext === 'png' ? 'png' : 'jpeg',
    quality: ext === 'jpg' || ext === 'jpeg' ? 85 : undefined,
    ...options,
  });
  console.log(`Saved ${filename}`);
}

async function captureDesktop(browser) {
  const page = await browser.newPage({ viewport: DESKTOP });

  for (const shot of pageShots) {
    await page.goto(`${baseUrl}${shot.url}`, { waitUntil: 'networkidle' });
    await page.waitForSelector(shot.waitFor, { timeout: 10000 });
    await page.waitForTimeout(800);
    await screenshot(page, shot.name);
  }

  await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle' });
  await page.waitForSelector('.hero', { timeout: 10000 });
  await screenshot(page, 'preview-1.jpg');

  const sections = [
    { id: 'diferenciais', file: 'preview-2.jpg' },
    { id: 'turmas', file: 'preview-3.jpg' },
    { id: 'contato', file: 'preview-4.jpg' },
  ];

  for (const { id, file } of sections) {
    await page.evaluate((sectionId) => document.getElementById(sectionId)?.scrollIntoView(), id);
    await page.waitForTimeout(600);
    await screenshot(page, file);
  }

  await page.close();
}

async function captureMobile(browser) {
  const page = await browser.newPage({
    viewport: MOBILE,
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });

  for (const shot of mobilePageShots) {
    await page.goto(`${baseUrl}${shot.url}`, { waitUntil: 'networkidle' });
    await page.waitForSelector(shot.waitFor, { timeout: 10000 });
    await page.waitForTimeout(800);
    await screenshot(page, shot.name);
  }

  await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle' });
  await page.waitForSelector('.hero', { timeout: 10000 });
  await page.evaluate(() => document.getElementById('diferenciais')?.scrollIntoView());
  await page.waitForTimeout(600);
  await screenshot(page, 'mobile-diferenciais.jpg');

  await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle' });
  await page.waitForSelector('.ham', { timeout: 10000 });
  await page.click('.ham');
  await page.waitForSelector('.drawer.on', { timeout: 5000 });
  await page.waitForTimeout(400);
  await screenshot(page, 'mobile-menu.jpg');

  await page.close();
}

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
await captureDesktop(browser);
await captureMobile(browser);
await browser.close();

console.log('Screenshots desktop e mobile geradas com sucesso.');
