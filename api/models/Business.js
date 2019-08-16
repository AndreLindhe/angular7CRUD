const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Business = new Schema({
  person_Name: {
    type: String
  },
  business_Name: {
    type: String
  },
  business_gst_Number: {
    type: Number
  }
},{
    collection: 'business'
});


module.exports = mongoose.model('Business', Business);
