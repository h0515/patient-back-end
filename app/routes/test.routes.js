module.exports = app => {
    const tests = require("../controllers/test.controller.js");
  
    var router = require("express").Router();

    router.get("/", tests.findAll);
    // Retrieve all Tutorials
    router.get("/findAll", tests.findAll);
  
  
    app.use('/api/tests', router);
  };
  