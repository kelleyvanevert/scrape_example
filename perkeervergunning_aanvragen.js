const puppeteer = require("puppeteer");
const fs = require("fs");

// Proberen in te loggen op Medium

async function run() {
  // const browser = await puppeteer.launch(); // <-- als je de browser niet wilt zien
  const browser = await puppeteer.launch({ headless: false }); // <-- als je de browser wilt zien
  const page = await browser.newPage();

  await page.goto("https://formulieren.amsterdam.nl/TriplEforms/DirectRegelen/formulier/nl-NL/evAmsterdam/PVGAanvraagBewoners.aspx/fPVGAanvraagBewonersVragen");

  // wachten tot de pagina laadt
  await page.waitFor(1000);

  // Een iets stabielere manier van een specifiek element vinden, wel wat ingewikkelder
  console.log("Trying to click (start het formulier opnieuw)...");
  await page.evaluate(() => {
    const node = Array.from(document.querySelectorAll("button, a"))
      .find(node => node.innerText.match(/start het formulier opnieuw/i));
    node.click();
  });

  // Wachten tot pagina weer opnieuw geladen is ...
  await page.waitFor(4000);

  console.log("Trying to click (Ik heb geen eigen parkeergelegenheid bij mijn woning)...");
  await page.evaluate(() => {
    const node = Array.from(document.querySelectorAll("label"))
      .find(node => node.innerText.match(/Ik heb geen eigen parkeergelegenheid bij mijn woning/i));
    node.click();
  });

  // Etc..
  await page.waitFor(4000);

  console.log("Trying to click (nee)...");
  await page.evaluate(() => {
    const node = Array.from(document.querySelectorAll("label"))
      .find(node => node.innerText.match(/nee/i));
    node.click();
  });

  await page.waitFor(4000);

  console.log("Trying to click (nee)...");
  await page.evaluate(() => {
    const node = Array.from(document.querySelectorAll("label"))
      .find(node => node.innerText.match(/nee/i));
    node.click();
  });

  await page.waitFor(4000);

  console.log("Trying to click (nee)...");
  await page.evaluate(() => {
    const node = Array.from(document.querySelectorAll("label"))
      .find(node => node.innerText.match(/nee/i));
    node.click();
  });

  await page.waitFor(4000);

  console.log("Trying to click (huur- of lease-auto)...");
  await page.evaluate(() => {
    const node = Array.from(document.querySelectorAll("label"))
      .find(node => node.innerText.match(/huur- of lease-auto/i));
    node.click();
  });

  await page.waitFor(4000);

  console.log("Trying to click (nee)...");
  await page.evaluate(() => {
    const node = Array.from(document.querySelectorAll("label"))
      .find(node => node.innerText.match(/nee/i));
    node.click();
  });

  await page.waitFor(4000);

  console.log("Trying to click (acceptgiro)...");
  await page.evaluate(() => {
    const node = Array.from(document.querySelectorAll("label"))
      .find(node => node.innerText.match(/acceptgiro/i));
    node.click();
  });

  await page.waitFor(4000);

  console.log("Trying to fill in email...");
  await page.evaluate(() => {
    const node = Array.from(document.querySelectorAll("input"))
      .find(node => node.placeholder.match(/domein/));
    node.value = "bla@bla.nl";
  });

  await page.waitFor(4000);

  console.log("Trying to click (volgende)...");
  await page.evaluate(() => {
    const node = Array.from(document.querySelectorAll("input"))
      .find(node => node.value.match(/volgende/i));
    node.click();
  });

  await page.waitFor(4000);

  console.log("Trying to click (verder)...");
  await page.evaluate(() => {
    const node = Array.from(document.querySelectorAll("input"))
      .find(node => node.value.match(/verder/i));
    node.click();
  });

  console.log("Vanaf hier zou 't wel erg lastig worden denk ik :D");
}

run();
