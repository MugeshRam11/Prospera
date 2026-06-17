const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:8084/', { waitUntil: 'networkidle' });

  await page.evaluate(() => window.scrollTo(0, 200));
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'pill-scrolled.png' });

  const menuBtn = page.getByRole('button', { name: /menu/i });
  await menuBtn.click();
  await page.waitForTimeout(1200);
  await page.screenshot({ path: 'pill-menu-open.png' });

  await browser.close();
})();
