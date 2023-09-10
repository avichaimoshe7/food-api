import Sequelize from "sequelize";
import database from "../utilis/database.js";

const stores = database.define("stores", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primarykey: true,
  },
  storename: Sequelize.STRING,
  storesaddress: Sequelize.STRING,
  storephone: Sequelize.STRING,
  storehours: Sequelize.STRING,
  storelogo: Sequelize.STRING,
  storecity: Sequelize.STRING,
  storeemail: Sequelize.STRING,
  categoryid: Sequelize.INTEGER,
});

export default stores;
