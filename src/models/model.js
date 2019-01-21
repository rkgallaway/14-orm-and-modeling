'use strict';
/** Class datamodel*/
class DataModel {
  /**
   *Creates an instance of DataModel.
   * @param {*} schema
   * @memberof DataModel
   */
  constructor(schema){
    this.schema = schema;
  }

  /**handles get
   *
   *
   * @param {*} _id
   * @returns queryObject
   * @memberof DataModel
   */
  get(_id){
    let queryObject = _id ? {_id} : {};
    return this.schema.find(queryObject);
  }


  /**handles post
   *
   *
   * @param {*} record
   * @returns newRecord
   * @memberof DataModel
   */
  post(record){
    let newRecord = new this.schema(record);
    return newRecord.save();
  }

  /**handles post
   *
   *
   * @param {*} _id
   * @param {*} entry
   * @memberof DataModel
   */
  put(_id, entry){
    this.schema.findByIdAndUpdate(_id, entry);
  }

  /**handles delete
   *
   *
   * @param {*} id
   * @memberof DataModel
   */
  delete(id){
    this.schema.findByIdAndDelte(id);
  }
}
module.exports = DataModel;

