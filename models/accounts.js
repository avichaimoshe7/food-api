import Sequelize from "sequelize";
import database from "../utilis/database.js";

const Accounts = database.define("accounts", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primarykey: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING,
  verifycode: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  isapproved: Sequelize.BOOLEAN,
  avatar: Sequelize.STRING,
  role: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

export default Accounts;
