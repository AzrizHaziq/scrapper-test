const { login } = require('./login')
const { open } = require('./../helpers')
const { closeTurnOnNotification} = require('./close-notification')

const startInstagram = async () => {
  const currentPage = await open('https://www.instagram.com/')

  await login(currentPage)

  await currentPage.waitForNavigation()

  await closeTurnOnNotification(currentPage)
}

module.exports = {
  startInstagram,
}
