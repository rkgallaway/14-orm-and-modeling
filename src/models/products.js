'use strict';

const productsSchema = require('./products-schema');
const DataModel = require('./model');

/**
 *class products extends datamodel
 *
 * @class Products
 * @extends {DataModel}
 */
class Products extends DataModel{}



module.exports = new Products(productsSchema);