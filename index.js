const { startFacebook } = require('./facebook/facebook.js')
const { startInstagram } = require('./instagram/instagram.js')

startInstagram()
  .then(() => console.log('done instagram'))
  .catch(e => console.warn('error: ', e))

startFacebook()
  .then(() => console.log('done facebook'))
  .catch(e => console.warn('error: ', e))
