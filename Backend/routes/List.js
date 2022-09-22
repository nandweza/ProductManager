const router = require("express").Router();
const ExpenseList = require("../models/ExpenseList");

//create expense
router.post("/", async (req, res) => {
  if (req) {
    const newExpenseList = new ExpenseList(req.body)

    try {
      const savedExpenseList = await newExpenseList.save();
      res.status(201).json(savedExpenseList);
    } catch (err) {
      res.status(500).json(err);
    }
  }
});

//update expense
router.put("/:id", async (req, res) => {
  if (req) {
    try {
      const updatedExpenseList = await ExpenseList.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      }, { new: true });
      res.status(200).json(updatedExpenseList);
    } catch (err) {
      res.status(500).json(err);
    }
  }
});

//get weelky expenses
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

//get monthly expenses
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

//get yearly expenses
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