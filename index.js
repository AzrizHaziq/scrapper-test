const { openBrowser } = require('./helpers.js')
const { startFacebook } = require('./facebook/facebook.js')
const { startInstagram } = require('./instagram/instagram.js')

async function start () {
  await openBrowser();

  //await startInstagram()
  await startFacebook()
}

start()
  .then(console.log)
  .catch(console.err)
