var authController = require("../controllers/authcontroller.js");

module.exports = function(app) {
  app.get("/", authController.signin);

  app.get("/account", authController.account);
};
