import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export function EditExpense(props){

    const param= useParams();
    const baseUrl="http://localhost:4000/api/expense/"+param.id;
    const navigate=useNavigate();
    const [expense,setExpense]=useState({});

    useEffect(()=>{
        const data= axios.get(baseUrl);
        data.then(response=>setExpense(response.data))
        .catch(error=>{console.log(error);
            setExpense({})
        })
    },[]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.put(baseUrl,expense)
        .then(result=>props.navigate.push('/expenseList'));
    }
    const inputHandler= (e)=>{
        setExpense((expense)=>(
            {
                ...expense,
                [e.target.item]:e.target.value
        }))
    }

    return (
        <div>
            <button onClick={navigate.goBack} className="btn btn-info">Go Back</button>
            <h1>Edit Item</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-3">
                        <form className="form" onSubmit={handleSubmit}>
                            <label>ID</label>
                            <input type='number' name='id' id='_id' placeholder="Enter ID"
                            value={expense.id} className='form-control' onChange={inputHandler}/>
                            <label>ITEM</label>
                            <input type='text' name='item' id='item' placeholder="Enter Item"
                            value={expense.item} className='form-control' onChange={inputHandler}/>
                            <label>Quantity</label>
                            <input type='number' name='cost' id='cost' placeholder="Enter Cost"
                            value={expense.quantity} className='form-control' onChange={inputHandler}/>
                            <label>Cost</label>
                            <input type='number' name='cost' id='cost' placeholder="Enter Cost"
                            value={expense.cost} className='form-control' onChange={inputHandler}/>
                            <label>Price</label>
                            <input type='number' name='price' id='price' placeholder="Enter Price"
                            value={expense.price} className='form-control' onChange={inputHandler}/>
                            <label>Week</label>
                            <input type='number' name='week' id='week' placeholder="Enter Week"
                            value={expense.week} className='form-control' onChange={inputHandler}/>
                            <label>Month</label>
                            <input type='text' name='month' id='month' placeholder="Enter Month"
                            value={expense.month} className='form-control' onChange={inputHandler}/>
                            <label>Year</label>
                            <input type='number' name='year' id='year' placeholder="Enter Year"
                            value={expense.year} className='form-control' onChange={inputHandler}/>

                            <button className="btn btn-primary" type="submit">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    ) ;
}