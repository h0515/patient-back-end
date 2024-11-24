module.exports = (sequelize, Sequelize) => {
    const Test = sequelize.define("test", {
      'name': {
        type: Sequelize.STRING
      },
      'signTime': {
        type: Sequelize.STRING
      },
      'bloodType': {
        type: Sequelize.STRING
      }
    });
  
    return Test;
  };