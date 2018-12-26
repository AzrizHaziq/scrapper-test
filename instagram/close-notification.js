const { delay, getElementByXpathString } = require('../helpers')

const notNowXPath = '/html/body/div[3]/div/div/div/div[3]/button[2]'
const turnOnNotificationXpath = '/html/body/div[3]/div/div/div/div[2]/h2'

const closeTurnOnNotification = async (page) => {
  try {
    await page.evaluate((turnOnNotificationXpath, notNowXPath, getElementByXpathString) => {
      const getElementByXpath = new Function('return (' + getElementByXpathString + ').apply(null, arguments)')
      
      const getNotificationText = getElementByXpath(turnOnNotificationXpath)
      
      if(getNotificationText.textContent === 'Turn on Notifications') {
        const notNowBtn = getElementByXpath(notNowXPath)
        notNowBtn.click()
      }
      
    }, turnOnNotificationXpath, notNowXPath, getElementByXpathString)
  } catch(e) {
    console.error('Error trying to close notification/set to not now', e)
  }
  
  await delay()
}

module.exports = {
  closeTurnOnNotification
}
