const { delay } = require('../helpers')

const { INSTAGRAM_USERNAME : u, INSTAGRAM_PASSWORD : p } = process.env
const loginSelector = '#react-root > section > main > article > div.rgFsT > div:nth-child(2) > p > a'
const submitXPath = '//*[@id="react-root"]/section/main/div/article/div/div[1]/div/form/div[3]/button'
const uXPath = '//*[@id="react-root"]/section/main/div/article/div/div[1]/div/form/div[1]/div/div[1]/input'
const pXPath = '//*[@id="react-root"]/section/main/div/article/div/div[1]/div/form/div[2]/div/div[1]/input'

const login = async (page) => {
  try {
    await delay()
    const loginLink = await page.waitFor(loginSelector)
    await loginLink.click()

    await delay()
    const uInput = await page.waitForXPath(uXPath)
    await uInput.click()
    await page.keyboard.type(u)

    const pInput = await page.waitForXPath(pXPath)
    await pInput.click()
    await page.keyboard.type(p)

    await delay()
    const submitBtn = await page.waitForXPath(submitXPath)
    await submitBtn.click()
  } catch(e) {
    console.error('Error: login', e)
  }
}

module.exports = {
  login
}
