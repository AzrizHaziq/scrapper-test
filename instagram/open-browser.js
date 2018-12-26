const puppeteer = require('puppeteer')

const open = async (instagramLink = 'https://www.instagram.com/') => {
  try {
    const browser = await puppeteer.launch({ headless : false })
    const page = await browser.newPage()
    await page.goto(instagramLink)
    return page
  } catch(e) {
    console.error('Error open page', e)
  }
}

module.exports = {
  open
};
