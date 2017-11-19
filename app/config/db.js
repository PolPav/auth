const Sequelize = require("sequelize");
const config = require("./config");
const conf = require('./index');

const db = new Sequelize(conf.get("db_cnn:database"), conf.get("db_cnn:username"), conf.get("db_cnn:password"), {
  host: conf.get("db_cnn:host"),
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

exports.module = db;
