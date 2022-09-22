const mongoose = require("mongoose");

const ExpenseListSchema = new mongoose.Schema(
  {
    title: {type: String, required: true},
    quantity: {type: Number, required: true},
    week: {type: Array},
    _month: {type: Array[week]},
  },
  { timestamps: true }
);

module.exports = mongoose.model("ExpenseList", ExpenseListSchema);