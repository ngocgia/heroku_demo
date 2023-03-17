const express = require('express');
const app = express();
const port = process.env.PORT; // cấu hình heroku
// const port = 3000;
const path = require("path");
const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

app.use(express.static('pages'))


app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'pages/index.html')));


(async function example() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    try {
      await driver.get('https://dichvucong.gov.vn/p/home/dvc-index-tinhthanhpho-tonghop.html');
      await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
      await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    } finally {
      await driver.quit();
    }
  })();

app.listen(port, () => console.log('App running port 3000!'));