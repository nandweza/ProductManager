import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function EditProduct(props){

    const param= useParams();
    const baseUrl="http://localhost:4000/api/product/"+param.id;
    const navigate=useNavigate();
    const [product,setProduct]=useState({});

    useEffect(()=>{
        const data= axios.get(baseUrl);
        data.then(response=>setProduct(response.data))
        .catch(error=>{console.log(error);
            setProduct({})
        })
    },[]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.put(baseUrl, product)
        .then(result=>props.navigate.push('/listProducts'));
    }
    const inputHandler= (e)=>{
        setProduct((product)=>(
            {
                ...product,
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
                            <label>S/N</label>
                            <input type='number' name='sn' id='sn'
                            value={product.id} className='form-control' onChange={inputHandler}/>
                            <label>ITEM</label>
                            <input type='text' name='item' id='item'
                            value={product.item} className='form-control' onChange={inputHandler}/>
                            <label>Quantity</label>
                            <input type='number' name='quantity' id='quantity'
                            value={product.quantity} className='form-control' onChange={inputHandler}/>
                            <label>Unit</label>
                            <input type='text' name='unit' id='unit'
                            value={product.quantity} className='form-control' onChange={inputHandler}/>
                            <label>Unit Price</label>
                            <input type='number' name='uprice' id='uprice'
                            value={product.cost} className='form-control' onChange={inputHandler}/>
                            <label>Cost Price</label>
                            <input type='number' name='cprice' id='cprice'
                            value={product.price} className='form-control' onChange={inputHandler}/>
                            <label>Selling Price</label>
                            <input type='number' name='sprice' id='sprice'
                            value={product.week} className='form-control' onChange={inputHandler}/>
                            <label>Profits</label>
                            <input type='number' name='profits' id='profits'
                            value={product.month} className='form-control' onChange={inputHandler}/>
                            <label>Date</label>
                            <input type='date' name='date' id='date'
                            value={product.year} className='form-control' onChange={inputHandler}/>

                            <button className="btn btn-primary" type="submit">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    ) ;
}