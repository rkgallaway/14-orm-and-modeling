'use strict';

const categoriesSchema = require('./categories-schema');
const DataModel = require('./model');

/**
 *class categories extends datamodel
 *
 * @class Categories
 * @extends {DataModel}
 */
class Categories extends DataModel{}



module.exports = new Categories(categoriesSchema);