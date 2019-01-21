'use strict';

const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

const products = mongoose.Schema({
  name: {type:String, required:true},
  type: {type:String, required:true},
  price: {type:Number, required:true},
}, {toObject:{virtuals:true}, toJson:{virtuals:true}});

  // echo '{"name":"sprocket","type":"Spacely", "price":"100", "category":"Jetsons"}' |http POST :3000/api/v1/products


products.virual('categories', {
  ref: 'categories',
  localField: 'name',
  foreignField: 'type',
  justOne:false,
});

products.pre('find', function (){
  try {
    this.populate('categories');
  }
  catch(e){console.log('find', e);}
});

module.exports = mongoose.model('products', products);
