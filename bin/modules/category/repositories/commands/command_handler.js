
const Category = require('./domain');
const Mongo = require('../../../../helpers/databases/mongodb/db');
const config = require('../../../../infra/configs/global_config');
const db = new Mongo(config.get('/mongoDbUrl'));

// const postDataLogin = async (payload) => {
//   const user = new User(db);
//   const postCommand = async payload => user.generateCredential(payload);
//   return postCommand(payload);
// };

// const registerUser = async (payload) => {
//   const user = new User(db);
//   const postCommand = async payload => user.register(payload);
//   return postCommand(payload);
// };

const insertCategory = async (payload) => {
  const category = new Category(db);
  const postCommand = async (payload) => category.create(payload);
  return postCommand(payload);
};

const deleteCategory = async (payload) => {
  const ategory = new Category(db);
  const postCommand = async (payload) => category.delete(payload);
  return postCommand(payload);
};

module.exports = {
  insertCategory,
  deleteCategory
};
