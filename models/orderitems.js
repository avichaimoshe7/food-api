import Sequelize from "sequelize";
import database from "../utilis/database.js";

const orderitems = database.define("orderitems", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primarykey: true,
  },
  orderid: Sequelize.INTEGER,
  productid: Sequelize.INTEGER,
  quantity: Sequelize.INTEGER,
});

export default orderitems;
