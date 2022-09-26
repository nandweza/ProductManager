import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

export default function ProductDetails(){

    const [product, setProduct]=useState({});
    const param= useParams();
    const navigate=useNavigate();
    const baseUrl="http://localhost:4000/api/product/"+param.id;

    useEffect(()=>{
        const data= axios.get(baseUrl);
        data.then(response=>setProduct(response.data))
        .catch(error=>{console.log(error);
            setProduct({})
        })
    },[]);

    return (
        <div>
            <button className="btn btn-info" onClick={navigate.goBack}>Go Back</button>
            <h1>Item Details</h1>
            <ul className="list-group">
                <li className="list-group-item">Name: {product.sn}</li>
                <li className="list-group-item">Name: {product.item}</li>
                <li className="list-group-item">Name: {product.quantity}</li>
                <li className="list-group-item">Name: {product.unit}</li>
                <li className="list-group-item">Name: {product.unitprice}</li>
                <li className="list-group-item">Name: {product.costprice}</li>
                <li className="list-group-item">Name: {product.sellingprice}</li>
                <li className="list-group-item">Name: {product.profits}</li>
                <li className="list-group-item">Name: {product.date}</li>
            </ul>
        </div>
    ) ;
}