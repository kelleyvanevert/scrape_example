const puppeteer = require("puppeteer");
const fs = require("fs");

// Dit is de makkelijkste manier van data opslaan:
const data = { "bla": [1, 2, 3] };
fs.writeFileSync(`save/data-${Date.now()}.json`, JSON.stringify(data, null, 2), "utf8");

async function run() {
  // const browser = await puppeteer.launch(); // <-- als je de browser niet wilt zien
  const browser = await puppeteer.launch({ headless: false }); // <-- als je de browser wilt zien
  const page = await browser.newPage();

  await page.goto("https://medium.com/@e_mad_ehsan/getting-started-with-puppeteer-and-chrome-headless-for-web-scrapping-6bf5979dee3e");

  // wachten tot de pagina laadt
  await page.waitFor(3000);

  // scrapen!
  let headings = await page.evaluate(() => {
    // Het is hier een beetje vies dat `querySelectorAll` een "NodeList" teruggeeft
    //  wat bijna, maar niet helemaal, een array is. Dus ik gebruik `Array.from()`
    //  om er een array van te maken, zodat ik vervolgens `.map` kan gebruiken
    //  om van elk van de nodes de `innerText` kan krijgen
    return Array.from(
      document.querySelectorAll("h1, h2, h3, h4")
    ).map(headingNode => headingNode.innerText)
  });
  // Zoals `print` in Python
  console.log(headings);
  // Data opslaan
  fs.writeFileSync(`save/headings-${Date.now()}.json`, JSON.stringify(headings, null, 2), "utf8");

  // screenshotje maken! :D
  await page.screenshot({ path: `save/test-${Date.now()}.png` });

  // Je kunt ook interacties aangaan met de pagina:
  await page.evaluate(() => {
    const first_link = document.querySelector("a");
    first_link.click();
  });

  // Dit is handig als je 't programmatisch wilt doen, want dan stopt 't programma.
  // Mmaar voor debugging laat ik 'm nog even weg. Je moet dan wel `node scrape.js`
  //  killen met bv. Ctrl+C.
  // browser.close();
}

run();

// Mogelijk leeswaar:
// - https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
// - 
