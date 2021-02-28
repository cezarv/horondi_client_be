const mongoose = require('mongoose');
const Language = require('../../../models/Language').schema;
const CurrencySet = require('../../../models/CurrencySet').schema;
const {
  IMAGE_NOT_PROVIDED,
} = require('../../../error-messages/constructor-basic-messages');
const {
  DB_TABLES_NAMES: { CONSTRUCTOR_BASICS },
} = require('../../../consts/db-tables-names');
const {
  DB_REFS: { MATERIAL, COLOR },
} = require('../../../consts/db-refs');
const {
  RANGES: { MIN, MAX },
} = require('../../../consts/ranges');

const constructorBasicSchema = new mongoose.Schema({
  name: [Language],
  material: {
    type: mongoose.Schema.Types.ObjectId,
    ref: MATERIAL,
  },
  color: {
    type: mongoose.Schema.Types.ObjectId,
    ref: COLOR,
  },
  image: {
    type: String,
    minlength: [MIN, IMAGE_NOT_PROVIDED],
    maxlength: [MAX, IMAGE_NOT_PROVIDED],
  },
  basePrice: [CurrencySet],
  available: Boolean,
  default: Boolean,
});

module.exports = mongoose.model(CONSTRUCTOR_BASICS, constructorBasicSchema);
