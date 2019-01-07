const { login } = require('./login')
const { openLink } = require('./../helpers.js')
const { closeTurnOnNotification} = require('./close-notification')

const startInstagram = async () => {
  try {
    const currentPage = await openLink('https://www.instagram.com/')

    await login(currentPage)

    await currentPage.waitForNavigation()

    await closeTurnOnNotification(currentPage)
  } catch (e) {
    console.error('Error startInstagram', e);
  }
}

module.exports = {
  startInstagram,
}
