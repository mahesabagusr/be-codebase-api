
class Command {
  constructor(db) {
    this.db = db;
  }

  // async insertCategory(document) {
  //   const { categoryName, isActive } = document;
  // }
  // async insertOneUser(document){
  //   this.db.setCollection('user');
  //   const result = await this.db.insertOne(document);
  //   return result;
  // }

  async insertOneProduct(document) {
    this.db.setCollection("product");
    const result = await this.db.insertOne(document);
    return result;
  }

  async updateOneProduct(document) {
    this.db.setCollection("product");
    const result = await this.db.updateOne(document);
    return result;
  }

  async deleteOneProduct(document) {
    this.db.setCollection("product");
    const result = await this.db.deleteOne(document);
    return result;
  }
}

module.exports = Command;
