const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

// Routes
const userRoutes = require("../routes/user");

module.exports = function (app) {
  app.use(express.json({ limit: "5mb", type: "application/json" }));
  app.use(express.urlencoded({ extended: false }));
  app.use(morgan("dev"));
  app.use(cors());
  app.use(helmet());

  app.use("/users", userRoutes);
};
