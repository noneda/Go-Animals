const { Sequelize } = require('sequelize');
require("dotenv").config();
const { getConfig } =  require('../config')

const config = getConfig();

const sequelize = new Sequelize(
  config.conectionMysql.MYSQL_DATABASE,
  config.conectionMysql.MYSQL_USERNAME,
  config.conectionMysql.MYSQL_PASSWORD,
  {
    host: config.conectionMysql.MYSQL_HOST,
    dialect: "mariadb",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to MYSQL connected successfully");
  })
  .catch((err) => {
    console.error("Can't connect to MYSQLDB:", err);
  });

module.exports = sequelize;