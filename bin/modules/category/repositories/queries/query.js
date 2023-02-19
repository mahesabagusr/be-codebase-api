
const ObjectId = require('mongodb').ObjectId;

// class Query {

  // constructor(db) {
  //   this.db = db;
  // }

  // async findOneUser(parameter) {
  //   this.db.setCollection('user');
  //   const recordset = await this.db.findOne(parameter);
  //   return recordset;
  // }

  // async findById(id) {
  //   this.db.setCollection('user');
  //   const parameter = {
  //     _id: ObjectId(id)
  //   };
  //   const recordset = await this.db.findOne(parameter);
  //   return recordset;
  // }

  // query buat tugas

class Query {
  constructor(db) {
    this.db = db;
  }

  async findById(id) {
    this.db.setCollection('category');
    const parameter = {
      _id: ObjectId(id)
    };
    const recordset = await this.db.findOne(parameter);
    return recordset;
  }

  async findAll() {
    this.db.setCollection('category')
    const recordset = await this.db.findMany();
    return recordset;
  }
}

// }

module.exports = Query;
