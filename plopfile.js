const generateComponent = require("./generate/component");
const generateHook = require("./generate/hook");

module.exports = function (plop) {
  plop.setGenerator("component", generateComponent);
  plop.setGenerator("hook", generateHook);
};
