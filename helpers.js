const puppeteer = require('puppeteer')
let browser = null

const getElementByXpath =
  path => document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue

const getElementByXpathString = getElementByXpath.toString()

const delay = (ms = 1000) => new Promise((resolve) => setTimeout(() => resolve(), ms))

const openLink = async (link) => {
  try {
    const page = await browser.newPage()
    await page.goto(link)
    return page
  } catch(e) {
    console.error('Error openLink page', e)
  }
}

const openBrowser = async () => {
  browser = await puppeteer.launch({
    headless : false,
  })
}

async function checkUsernameAndPassword({ socialApp, u, p }) {
  if(!u || !p) {
    throw Error(`You have not configured username and password for ${ socialApp }. Insert it into .env`)
  }
}

module.exports = {
  getElementByXpath,
  getElementByXpathString,
  delay,
  openBrowser,
  openLink,
  checkUsernameAndPassword,
}
