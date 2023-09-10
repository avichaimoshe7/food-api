import Sequelize from "sequelize";
import database from "../utilis/database.js";

const orders = database.define("orders", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primarykey: true,
  },
  userid: Sequelize.INTEGER,
  storeid: Sequelize.INTEGER,
  ordercost: Sequelize.FLOAT,
  orderaddress: Sequelize.STRING,
  paymentmethod: Sequelize.STRING,
});

export default orders;
