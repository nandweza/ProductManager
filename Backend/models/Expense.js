const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema(
  {
    id: {type: Number, required: true, unique: true},
    item: {type: String, required: true},
    quantity: {type: Number, required: true},
    _cost: {type: Number, required: true},
    price: {type: Number, required: true},
    week: {type: Number, required: true},
    _month: {type: String, required: true},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Expense", ExpenseSchema);