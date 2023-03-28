const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TransactionsSchema = new Schema({
  user : {
    type : mongoose.Schema.Types.ObjectId,
    required : true
  },
  transaction_type : {
    type : String,
    required : false,
    default : 'membership'
  },
  created_at: {
    type: Date,
    required: true,
    default: Date()
  },
  price_id: {
    type: String,
    required: true
  }
});

module.exports = User = mongoose.model("transactions", TransactionsSchema);
