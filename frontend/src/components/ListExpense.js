import axios from "axios";
import React, { useEffect, useState } from "react";
import { editExpense } from "./editExpense";

export default function ListExpense(props) {

    const [expenses, setExpenses] = useState([]);
    const url = 'http://localhost:4000/api/expense/';

    const getData = () => {
        const mydata = axios.get(url)
        mydata.then(response => { setExpenses(response.data); })
            .catch(error => { console.log(error); setExpenses([]) })
    }
    const viewItem = (id) => {
        props.history.push({
            pathname: '/itemDetails/' + id
        })
    }
    const editItem = (id) => {
        props.history.push({
            pathname: '/editExpense/' + id
        })
    }
    const tabRow = expenses.map((expense, i) => {
        return (
            <tr key={i}>
                <td>{expense._id}</td>
                <td>{expense.fname}</td>
                <td>{expense.email}</td>
                <td>{expense.mno}</td>
                <td>
                    <button className="btn btn-warning" onClick={() => { viewItem(expense._id) }}>View Item</button>
                    <button className="btn btn-info" onClick={() => { editItem(expense._id) }}>Edit Item</button>
                </td>
            </tr>
        );
    })

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <h1>Products List</h1>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>S/N</th><th>Item</th><th>Quantity</th><th>Cost</th><th>Price</th><th>Date</th><th>Week</th>
                    </tr>
                </thead>
                <tbody>
                    {tabRow}
                </tbody>
            </table>
        </div>
    );
};
