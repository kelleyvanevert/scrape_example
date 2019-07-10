
Hey!

Mocht je in zijn voor een nieuwe programmeertaal, ik geloof dat het op den duur makkelijker is om in javascript te scrapen,
 omdat het web toch ook in javascript werkt; dus dan zit je "dichter op het bot". Dit zal allemaal ook in selenium en/of
 beautifulsoup kunnen, maar het voordeel van deze aanpak is dat je volgensmij makkelijker interactief de pagina kunt
 navigeren en data eruit selecteren, zoals je dat ook als gebruiker zou doen. Als je de pagina eerst te laadt, daarna
 als HTML "downloadt", parst (wat een vervoeging :D) enz, dan kun je daarna niet echt goed meer een kant op. Maar in deze
 aanpak, wat vast ook met Selenium ook zal kunnen hoor, kun je alles doen terwijl de browser draaien blijft.

Dit is hoe je de code zou gebruiken:

1. je zult `node` (tezamen met `npm`) moeten installeren, in mijn ervaring gaat dat 't makkelijkste met [`nvm` (node version manager)](https://github.com/nvm-sh/nvm):
   - `wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash`
   - `nvm install node`
1. `git clone` deze repo of als ZIPje downloaden
1. in de folder `npm install` doen, zodat Puppeteer wordt geinstalleerd (de google chrome tegenhanger van Selenium?)
1. klaar om scrapen :D `node scrape_example.js` en/of `node perkeervergunning_aanvragen.js`
