import React, { useState } from 'react'
import axios from "axios";

export default function AddProduct(props) {
  const [product, setProduct] = useState(
    {
      sn:"", item:"", quantity:"", unit:"", unitprice:"", costprice:"", sellingprice:"", profit:"", date:""
    }
  );

  const inputHandler = (e) => {
    setProduct((product) => (
      {
        ...product,
        [e.target.item]:e.target.value
      }
    ))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:4000/api/product", product)
    .then(res=>props.history.push('/listProducts'))
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
              <label>Unit</label>
              <input type='text' name='unit' id='unit'
              className='form-control' onChange={inputHandler}/>
              <label>Unit Price</label>
              <input type='number' name='uprice' id='uprice'
              className='form-control' onChange={inputHandler}/>
              <label>Cost Price</label>
              <input type='number' name='cprice' id='cprice'
              className='form-control' onChange={inputHandler}/>
              <label>Selling Price</label>
              <input type='number' name='sprice' id='sprice'
              className='form-control' onChange={inputHandler}/>
              <label>Profits</label>
              <input type='number' name='profits' id='profits'
              className='form-control' onChange={inputHandler}/>
              <label>Date</label>
              <input type='date' name='date' id='date'
              className='form-control' onChange={inputHandler}/>

              <button className="btn btn-primary" type="submit">Add Items Details</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};
