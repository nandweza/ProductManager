const router = require("express").Router();
const ExpenseList = require("../models/ExpenseList");

//create expense list
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

//get expenses list
router.get("/", async (req, res) => {
  const typeQuery = req.query.type;
  let list = [];

  try {
    if (typeQuery) {
        list = await ExpenseList.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery} },
        ]);
      } else {
        list = await ExpenseList.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery } },
        ]);
      }
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;