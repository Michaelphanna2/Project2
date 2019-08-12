var exports = (module.exports = {});

exports.account = function(req, res) {
  res.render("account");
};

exports.signin = function(req, res) {
  res.render("index");
};

exports.home = function(req, res) {
  res.render("home");
};

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    if (err) throw err;
    res.redirect("/");
  });
};
