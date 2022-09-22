const router = require("express").Router();
const Expense = require("../models/Expense");

//create expense
router.post("/", async (req, res) => {
  if (req) {
    const newExpense = new Expense(req.body)

    try {
      const savedExpense = await newExpense.save();
      res.status(201).json(savedExpense);
    } catch (err) {
      res.status(500).json(err);
    }
  }
});

//update expense
router.put("/:id", async (req, res) => {
  if (req) {
    try {
      const updatedExpense = await Expense.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      }, { new: true });
      res.status(200).json(updatedExpense);
    } catch (err) {
      res.status(500).json(err);
    }
  }
});

//get all expenses
router.get("/", async (req, res) => {
  if (req) {
    try {
      const expenses = await Expense.find();
      res.status(200).json(expenses);
    } catch (err) {
      res.status(500).json(err);
    }
  }
});

module.exports = router;