const { startInstagram } = require('./instagram/instagram.js')

startInstagram()
  .then(() => console.log('done'))
  .catch(e => console.warn('error: ', e))
