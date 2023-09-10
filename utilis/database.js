import Sequelize from "sequelize";

const connection = new Sequelize(
  "food_db", //name of database
  "root", //username
  "avichaim7", //password
  {
    dialect: "mysql",
    host: "localhost",
  }
);

export default connection;
