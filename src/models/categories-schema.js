'use strict';

const products = require('./products-schema.js');
const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

const categories = mongoose.Schema({
  name: {type:String, required:true},
  description: {type:String, required:true},
}, {toObject:{virtuals:true}, toJson:{virtuals:true}});

categories.virual('products', {
  ref: 'products',
  localField: 'name',
  foreignField: 'category',
  justOne:false,
});

categories.pre('find', function (){
  try {
    this.populate('products');
  }
  catch(e){console.log('find', e);}
});

categories.pre('save', function(next){
  if(this.name === 'April'){
    this.name = 'Showers';
  }
  if(this.name === 'May'){
    this.name = 'Flowers';
  }
  next();
});

module.exports = mongoose.model('categories', categories);