const generateComponent = require('./generate/component')
const generateHook = require('./generate/hook')

module.exports = function (plop) {
  plop.setHelper('obj', (text) => `{{ ${text} }}`)
  plop.setHelper('propsHelper', (text) => `{${text}}`)

  plop.setGenerator('component', generateComponent)
  plop.setGenerator('hook', generateHook)
}
