const getElementByXpath =
  path => document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue

const getElementByXpathString = getElementByXpath.toString()

const delay = (ms = 1000) => new Promise((resolve) => setTimeout(() => resolve(), ms))

module.exports = {
  getElementByXpath,
  getElementByXpathString,
  delay
}
