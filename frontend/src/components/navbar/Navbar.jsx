import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="topLeft">
          <span className="logo">Expenses Management System</span>
        </div>
        <div className="topRight">
          <nav className='btn btn-warning navbar navbar-expand-lg navheader'>
            <div className='collapse navbar-collapse'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <Link to="createUser" className='nav-link'>Add Item</Link>
                </li>
                <li className='nav-item'>
                  <Link to="userList" className='nav-link'>ExpenseList</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}