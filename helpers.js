const puppeteer = require('puppeteer')

const getElementByXpath =
  path => document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue

const getElementByXpathString = getElementByXpath.toString()

const delay = (ms = 1000) => new Promise((resolve) => setTimeout(() => resolve(), ms))

const open = async (link) => {
  try {
    const browser = await puppeteer.launch({ headless : false })
    const page = await browser.newPage()
    await page.goto(link)
    return page
  } catch(e) {
    console.error('Error open page', e)
  }
}

module.exports = {
  getElementByXpath,
  getElementByXpathString,
  delay,
  open
}
