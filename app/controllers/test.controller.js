const db = require("../models");
const Test = db.tests;
const Op = db.Sequelize.Op;
exports.findAll = (req, res) => {
    Test.findAll()
      .then(data => {
        res.send({data, code:200});
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };

  