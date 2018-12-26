const { login } = require('./login')
const { open } = require('./open-browser')
const { closeTurnOnNotification} = require('./close-notification')

const startInstagram = async () => {
  const currentPage = await open()
  
  await login(currentPage)
  
  await currentPage.waitForNavigation()
  
  await closeTurnOnNotification(currentPage)
}

module.exports = {
  startInstagram,
}
