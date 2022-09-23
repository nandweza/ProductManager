import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

export function ExpenseDetails(){

    const [expense,setExpense]=useState({});
    const param= useParams();
    const navigate=useNavigate();
    const baseUrl="http://localhost:4000/api/expense/"+param.id;

    useEffect(()=>{
        const data= axios.get(baseUrl);
        data.then(response=>setExpense(response.data))
        .catch(error=>{console.log(error);
            setExpense({})
        })
    },[]);

    return (
        <div>
            <button className="btn btn-info" onClick={navigate.goBack}>Go Back</button>
            <h1>Item Details</h1>
            <ul className="list-group">
                <li className="list-group-item">Name: {expense.id}</li>
                <li className="list-group-item">Name: {expense.item}</li>
                <li className="list-group-item">Name: {expense.quantity}</li>
                <li className="list-group-item">Name: {expense.cost}</li>
                <li className="list-group-item">Name: {expense.price}</li>
                <li className="list-group-item">Name: {expense.week}</li>
                <li className="list-group-item">Name: {expense.month}</li>
                <li className="list-group-item">Name: {expense.year}</li>

            </ul>
        </div>
    ) ;
}