const { login } = require('./login')
const { open } = require('./../helpers')

const startFacebook = async () => {
  const currentPage = await open('https://www.facebook.com/')

  await login(currentPage)

  await currentPage.waitForNavigation()
}

module.exports = {
  startFacebook,
}