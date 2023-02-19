
class Command {
  constructor(db) {
    this.db = db;
  }


  async insertOneCategory(document) {
    this.db.setCollection("category");
    const result = await this.db.insertOne(document);
    return result;
  }

  async updateOneCategory(document) {
    this.db.setCollection("category");
    const result = await this.db.updateOne(document);
    return result;
  }

  async deleteOneCategory(document) {
    this.db.setCollection("category");
    const result = await this.db.deleteOne(document);
    return result;
  }
}

module.exports = Command;
