'use strict';

const productsSchema = require('./products-schema');
const DataModel = require('./model');

class Products extends DataModel{}



module.exports = new Products(productsSchema);