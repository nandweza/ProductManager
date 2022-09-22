const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema(
  {
    id: {type: Number, required: true, unique: true},
    item: {type: String, required: true},
    quantity: {type: Number, required: true},
    cost: {type: Number, required: true},
    price: {type: Number, required: true},
    week: {type: Number, required: true},
    month: {type: String, required: true},
    year: {type: String, required: true},
    isMonthly: {type: Boolean, default: false},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Expense", ExpenseSchema);