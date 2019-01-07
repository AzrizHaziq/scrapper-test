const { login } = require('./login')
const { openLink } = require('./../helpers.js')

const startFacebook = async () => {
  try {
    const currentPage = await openLink('https://www.facebook.com/')

    await login(currentPage)

    await currentPage.waitForNavigation()

  } catch(e) {
    console.error('Error startFacebook', e)
  }
}

module.exports = {
  startFacebook,
}
