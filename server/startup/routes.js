const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

// Routes
const authRoutes = require("../routes/auth");
const userRoutes = require("../routes/user");
const tagRoutes = require("../routes/tag");

module.exports = function (app) {
  app.use(express.json({ limit: "5mb", type: "application/json" }));
  app.use(express.urlencoded({ extended: false }));
  app.use(morgan("dev"));
  app.use(helmet());
  app.use(cors());

  app.use("/", authRoutes);
  app.use("/", userRoutes);
  app.use("/", tagRoutes);
};
