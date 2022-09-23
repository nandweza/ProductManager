const express = require("express");
const Expense = require("../models/Expense");

const router = express.Router();

router.get("/", (req, res) => {
  Expense.find((err, docs) => {
    if(!err)
    {
      res.status(200).send(docs);
    }
  });
});

//create item
router.post("/", (req, res) => {
  console.log(req.body);
  var expense = new Expense();
  expense.id =req.body.id;
  expense.item =req.body.item;
  expense.quantity =req.body.quantity;
  expense.cost =req.body.cost;
  expense.price =req.body.price;
  expense.week =req.body.week;
  expense.month =req.body.month;
  expense.year =req.body.year;

  expense.save((err, doc)  => {
    if(!err){
      res.status(200).send(doc);
    }
    else
    {
      console.log(err)
    }
  })
});

//get all expenses
router.get("/", (req, res) => {
  const id = req.params.id;
  Expense.findById(id, (err, doc) => {
    if(!err){
      if(doc)
        res.status(200).send(doc);
      else
        res.status(404).send({ message: "No Item found with id=" + id });
    } else {
      res.status(500).send({ message: "Error retrieving Item with id=" + id });
    }
  })
});

router.put('/:id', (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }
  const id = req.params.id;
  Expense.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Item with id=${id}.`
        });
      } else res.send({ message: "Item was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Item with id=" + id
      });
    });
});

module.exports = router;