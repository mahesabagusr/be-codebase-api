const joi = require('joi');

// const login = joi.object({
//   username: joi.string().required(),
//   password: joi.string().required(),
//   isActive : joi.boolean().default(true, 'Example If Need Default Value')
// });

const category = joi.object({
  product: joi.string().required(),
  kategories: joi.string().required(),
  harga: joi.string().required(),
  keterangan: joi.string().required(),
  isActive: joi.boolean().default(true, "Example If Need Default Value"),
});

module.exports = {
  category
};
