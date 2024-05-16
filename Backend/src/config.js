require("dotenv").config();

const prodConfig = {
  SECRET: process.env.SECRET,
  conection: {
    PORT: process.env.PORT,
    MONGODB_URI: process.env.MONGODB_URI,
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
  SECRET: process.env.SECRET,
  conection: {
    PORT: process.env.PORT,
    MONGODB_URI: process.env.MONGODB_URI,
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
 
