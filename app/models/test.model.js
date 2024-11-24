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
      },
      'sex': {
        type: Sequelize.STRING
      },
      'phone': {
        type: Sequelize.DECIMAL
      },
      'height': {
        type: Sequelize.DOUBLE
      },
      'weight': {
        type: Sequelize.DOUBLE
      },
      'address': {
        type: Sequelize.STRING
      },
      'doctorName':{
        type: Sequelize.STRING
      },
      'DR1': {
        type: Sequelize.STRING
      },
      'DR2': {
        type: Sequelize.STRING
      },
      'DP1': {
        type: Sequelize.STRING  
      },
      'DP2': {
        type: Sequelize.STRING
      },
      'DQ1':{
        type: Sequelize.STRING  
      },
      'DQ2': {
        type: Sequelize.STRING
      }
    });
  
    return Test;
  };