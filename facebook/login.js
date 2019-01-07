const { delay } = require('../helpers')

const { FACEBOOK_USERNAME : u, FACEBOOK_PASSWORD : p } = process.env
const uXPath = '//*[@id="email"]'
const pXPath = '//*[@id="pass"]'

const login = async (page) => {
  try {
    await delay()

    const uInput = await page.waitForXPath(uXPath)
    await uInput.click()
    await page.keyboard.type(u)

    const pInput = await page.waitForXPath(pXPath)
    await pInput.click()
    await page.keyboard.type(p)

    await page.evaluate(() => {
      const loginForm = document.getElementById('login_form');
      loginForm.submit();
    })

  } catch(e) {
    console.error('Error: login', e)
  }
}

module.exports = {
  login
}
