// Create the model that connects the user table
//User table will need to store the username and the password in the usertable for autentication

module.exports = function(sequelize, DataTypes) {
  var Authenticate = sequelize.define("Authenticate", {
    username: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [8]
      }
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }});
  return Authenticate;
};


