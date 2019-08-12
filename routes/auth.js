var authController = require("../controllers/authcontroller.js");
var passport = require("passport");

module.exports = function(app) {
  app.get("/", authController.signin);

  app.get("/account", authController.account);

  app.get("/home", authController.home);

  app.get("/logout", isLoggedIn, authController.logout);

  app.post(
    "/account",
    passport.authenticate("local-signup", {
      successRedirect: "/home",

      failureRedirect: "/account"
    })
  );
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();

    res.redirect("/");
  }
};
