import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="topLeft">
          <span className="logo">Product Management System</span>
        </div>
        <div className="topRight">
          <nav className='btn navbar-expand-lg'>
            <div className='collapse navbar-collapse'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <Link to="/" className='nav-link'>Home</Link>
                </li>
                <li className='nav-item'>
                  <Link to="createExpense" className='nav-link'>Add Item</Link>
                </li>
                <li className='nav-item'>
                  <Link to="listExpenses" className='nav-link'>ProductList</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}