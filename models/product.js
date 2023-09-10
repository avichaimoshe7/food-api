import Sequelize from "sequelize";
import database from "../utilis/database.js";

const product = database.define("product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primarykey: true,
  },
  prodname: Sequelize.STRING,
  proddesc: Sequelize.STRING,
  prodprice: Sequelize.FLOAT,
  categoryid: Sequelize.INTEGER,
  storeid: Sequelize.INTEGER,
});

export default product;
