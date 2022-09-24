import React, { useState } from 'react'
import axios from "axios";

export default function AddExpense(props) {
  const [expense, setExpense] = useState(
    {
      no:"", item:"", quanity:"", cost:"", price:"", week:"", month:"", year:""
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
              <label>S/N</label>
              <input type='number' name='no' id='no'
               className='form-control' onChange={inputHandler}/>
              <label>ITEM</label>
              <input type='text' name='item' id='item' placeholder="eg Laptop"
              className='form-control' onChange={inputHandler}/>
              <label>Quantity</label>
              <input type='number' name='cost' id='cost'
              className='form-control' onChange={inputHandler}/>
              <label>Cost</label>
              <input type='number' name='cost' id='cost'
              className='form-control' onChange={inputHandler}/>
              <label>Price</label>
              <input type='number' name='price' id='price'
              className='form-control' onChange={inputHandler}/>
              <label>Date</label>
              <input type='date' name='date' id='date'
              className='form-control' onChange={inputHandler}/>
              <label>Week</label>
              <input type='number' name='week' id='week'
              className='form-control' onChange={inputHandler}/>

              <button className="btn btn-primary" type="submit">Add Items Details</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};
