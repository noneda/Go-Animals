require("dotenv").config();

const prodConfig = {
  KEY: process.env.KEY,
  SECRET: process.env.SECRET,
  MAC : process.env.MAC,
  conection: {
    PORT: process.env.PORT,
  },
  conectionMysql: {
    MYSQL_DATABASE: process.env.MYSQL_DATABASE,
    MYSQL_USERNAME: process.env.MYSQL_USERNAME,
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
    MYSQL_HOST: process.env.MYSQL_HOST
  },
  HOST: process.env.HOST,
};

const devConfig = {
  KEY: process.env.KEY,
  SECRET: process.env.SECRET,
  MAC : process.env.MAC,
  conection: {
    PORT: process.env.PORT,
  },
  conectionMysql: {
    MYSQL_DATABASE: process.env.MYSQL_DATABASE,
    MYSQL_USERNAME: process.env.MYSQL_USERNAME,
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
    MYSQL_HOST: process.env.MYSQL_HOST
  },
  HOST: process.env.HOST,
};

const getConfig = () => {
  if (process.env.NODE_ENV === "production") {
     return prodConfig;
  } else {
     return devConfig;
  }
 };
 
 module.exports = { getConfig };
 
