const puppeteer = require('puppeteer');

describe('Main Page', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('should display "Hello World" on the main page', async () => {
    await page.goto('http://localhost:3000');
    await page.waitForSelector('body'); // Ensure the page is loaded

    const textContent = await page.evaluate(() => document.body.textContent);
    expect(textContent).toContain('Hello World!!!!!');
  });
});