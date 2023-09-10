import Sequelize from "sequelize";
import database from "../utilis/database.js";

const categories = database.define("categories", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primarykey: true,
  },
  categoryname: Sequelize.STRING,
  categoryimage: Sequelize.STRING,
  categoryorder: Sequelize.INTEGER,
  categorydesc: Sequelize.STRING,
});

export default categories;

export const getcategories = () => {
  categories.findall();
};
export const getcategorybyid = (id) => {};
export const addnewcategory = () => {};
export const updatecategorybyid = (id) => {};
export const deletecategorybyid = (id) => {};
