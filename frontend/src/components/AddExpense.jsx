import React, { useState } from 'react'
import axios from "axios";

export function AddExpense(props) {
  const [expense, setExpense] = useState(
    {
      id:"", item:"", quanity:"", cost:"", price:"", week:"", month:"", year:""
    }
  );

  const inputHandler = (e) => {
    setExpense((expense) => (
      {
        ...expense,
        [e.target.item]:e.target.value
      }
    ))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:4000/api/expense", expense)
    .then(res=>props.history.push('/listExpenses'))
    .catch(error=>console.log(error))
  }

  return (
    <div>
      <h1>Add Items</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-3">
            <form className="form" onSubmit={handleSubmit}>
              <label>ID</label>
              <input type='number' name='id' id='_id' placeholder="Enter ID"
              value={expense.id||''} className='form-control' onChange={inputHandler}/>
              <label>ITEM</label>
              <input type='text' name='item' id='item' placeholder="Enter Item"
              value={expense.item||''} className='form-control' onChange={inputHandler}/>
              <label>Quantity</label>
              <input type='number' name='cost' id='cost' placeholder="Enter Cost"
              value={expense.quantity||''} className='form-control' onChange={inputHandler}/>
              <label>Cost</label>
              <input type='number' name='cost' id='cost' placeholder="Enter Cost"
              value={expense.cost||''} className='form-control' onChange={inputHandler}/>
              <label>Price</label>
              <input type='number' name='price' id='price' placeholder="Enter Price"
              value={expense.price||''} className='form-control' onChange={inputHandler}/>
              <label>Week</label>
              <input type='number' name='week' id='week' placeholder="Enter Week"
              value={expense.week||''} className='form-control' onChange={inputHandler}/>
              <label>Month</label>
              <input type='text' name='month' id='month' placeholder="Enter Month"
              value={expense.month||''} className='form-control' onChange={inputHandler}/>
              <label>Year</label>
              <input type='number' name='year' id='year' placeholder="Enter Year"
              value={expense.year||''} className='form-control' onChange={inputHandler}/>

              <button className="btn btn-primary" type="submit">Add Items Details</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};
