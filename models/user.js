// Create the model that connects the user table
//User table will need to store the username and the password in the usertable for autentication

module.exports = function(sequelize, DataTypes) {
  var Authenticate = sequelize.define("Authenticate", {
    pVusername: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    pVpassword: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [6]
      }
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }});
  return Authenticate;
};


