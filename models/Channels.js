const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ChannelsSchema = new Schema({
  logo : {
    type : String,
    required : true,
  },
  title : {
    type : String,
    required : true,
  },
  description : {
    type : String,
    required : false,
  },
  created_at: {
    type: Date,
    required: true,
    default: Date()
  },
});

module.exports = User = mongoose.model("channels", ChannelsSchema);
