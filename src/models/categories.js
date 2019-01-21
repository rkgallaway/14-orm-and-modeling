'use strict';

const categoriesSchema = require('./categories-schema');
const DataModel = require('./model');

class Categories extends DataModel{}



module.exports = new Categories(categoriesSchema);