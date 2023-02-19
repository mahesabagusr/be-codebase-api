
const Query = require('../queries/query');
const Command = require('./command');
const wrapper = require('../../../../helpers/utils/wrapper');
const logger = require('../../../../helpers/utils/logger');

class Category {
  constructor(db) {
    this.command = new Command(db);
    this.query = new Query(db);
  }

  // async generateCredential(payload) {
  //   const ctx = 'domain-generateCredential';
  //   const { username, password } = payload;
  //   const user = await this.query.findOneUser({ username });
  //   if (user.err) {
  //     logger.log(ctx, user.err, 'user not found');
  //     return wrapper.error(new NotFoundError('user not found'));
  //   }
  //   const userId = user.data._id;
  //   const userName = user.data.username;
  //   const pass = await commonUtil.decrypt(user.data.password, algorithm, secretKey);
  //   if (username !== userName || pass !== password) {
  //     return wrapper.error(new UnauthorizedError('Password invalid!'));
  //   }
  //   const data = {
  //     username,
  //     sub: userId
  //   };
  //   const token = await jwtAuth.generateToken(data);
  //   return wrapper.data(token);
  // }

  // async register(payload) {
  //   const { username, password, isActive } = payload;
  //   const user = await this.query.findOneUser({ username });

  //   if (user.data) {
  //     return wrapper.error(new ConflictError('user already exist'));
  //   }

  //   const chiperPwd = await commonUtil.encrypt(password, algorithm, secretKey);
  //   const data = {
  //     username,
  //     password: chiperPwd,
  //     isActive
  //   };

  //   const { data:result } = await this.command.insertOneUser(data);
  //   return wrapper.data(result);

  // }

  async create(payload) {
    const { payload: result } = await this.command.insertOneCategory(payload);
    return wrapper.data(result);
  }

  async delete(payload) {
    const { payload: result } = await this.command.deleteOneCategory(payload);
    return wrapper.data(result);
  }
}

module.exports = Category;
