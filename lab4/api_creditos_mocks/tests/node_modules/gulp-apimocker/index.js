var apimocker = require("apimocker");

module.exports = {
  start: function (options) {
    if (options == null) {
      options = {};
    }

    apimocker.createServer(options).setConfigFile(options.config).start();
  }
}