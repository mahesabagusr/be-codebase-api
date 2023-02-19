
const Category = require('./domain');
const Mongo = require('../../../../helpers/databases/mongodb/db');
const config = require('../../../../infra/configs/global_config');
const db = new Mongo(config.get('/mongoDbUrl'));
const category = new Category(db);

const getAllCategory = async () => {
  const getData = async () => {
    const result = await category.getAllCategory();
    return result;
  };
  const result = await getData();
  return result;
};

const getCategoryById = async (id) => {
  const getData = async () => {
    const result = await category.getCategoryById(id);
    return result;
  };
  const result = await getData();
  return result;
};

module.exports = {
  getAllCategory, getCategoryById
};
