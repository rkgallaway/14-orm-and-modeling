'use strict';

const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

const categories = mongoose.Schema({
  name: {type:String, required:true},
  type: {type:String, required:true},
  price: {type:Number, required:true},
}, {toObject:{virtuals:true}, toJson:{virtuals:true}});

categories.virual('products', {
  ref: 'products',
  localField: 'price',
  foreignField: 'type',
  justOne:false,
});

categories.pre('find', function (){
  try {
    this.populate('products');
  }
  catch(e){console.log('find', e);}
});

categories.pre('save', function(next){
  if(this.name === 'category'){
    this.name = 'categoryIs';
  }
  if(this.name === 'product'){
    this.name = 'productIs';
  }
  next();
});

module.exports = mongoose.model('categories', categories);