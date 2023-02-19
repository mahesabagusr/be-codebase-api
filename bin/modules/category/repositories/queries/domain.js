
const Query = require('./query');
const wrapper = require('../../../../helpers/utils/wrapper');
const { NotFoundError } = require('../../../../helpers/error');

class Category {
  constructor(db) {
    this.query = new Query(db);
  }

  // async viewUser(userId) {
  //   const user = await this.query.findById(userId);
  //   if (user.err) {
  //     return wrapper.error(new NotFoundError('Can not find user'));
  //   }
  //   const { data } = user;
  //   return wrapper.data(data);
  // }

  async getAllCategory() {
    const category = await this.query.findAll();
    if (category.err) {
      return wrapper.error(new NotFoundError("Can not find cart"));
    }
    const { data } = cart;
    return wrapper.data(data);
  }

  async getCategoryById(id) {
    const category = await this.query.findById(id);
    if (category.err) {
      return wrapper.error(new NotFoundError("Can not find category"));
    }
    const { data } = category;
    return wrapper.data(data);
  }
}

module.exports = Category;
