import Sequelize from "sequelize";
import database from "../utilis/database.js";

const productimage = database.define("productimage", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primarykey: true,
  },
  productid: Sequelize.INTEGER,
  imageurl: Sequelize.STRING,
});

export default productimage;
