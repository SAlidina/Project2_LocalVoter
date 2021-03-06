module.exports = function (sequelize, DataTypes) {
  var UserBill = sequelize.define('userbill', {
   Follow: DataTypes.BOOLEAN
  });
  
  User.belongsToMany(Bill, { through: UserBill });
  Bill.belongsToMany(User, { through: UserBill });
  return UserBill;
};