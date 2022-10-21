const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const {loginToken,routeValidation} =require("../controllers/middleware");

module.exports = (app) => {
  app.engine(
    ".hbs",
    handlebars.engine({
      extname: ".hbs",
    })
  );
  app.set("view engine", ".hbs");
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use(express.static("static"));

  app.use(cookieParser());
  app.use(loginToken);
  app.use(routeValidation);

};
