var authController = require("../controllers/authcontroller.js");
var passport = require("passport");

module.exports = function(app) {
  app.get("/", authController.signin);

  app.get("/account", authController.account);

  app.post(
    "/account",
    passport.authenticate("local-signup", {
      successRedirect: "/home",

      failureRedirect: "/account"
    })
  );
};
