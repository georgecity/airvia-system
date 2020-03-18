import React, { Component } from 'react'; //most components start like this
import { Link } from 'react-router-dom'; //as we using link we can link to different routes

export default class Navbar extends Component { //always

    render() { //always
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">AIRVIA</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/users/register" className="nav-link">Register User</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/stock/" className="nav-link">Blank Stock</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/stock/add" className="nav-link">Add Blank</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/currency/add" className="nav-link">Add Currency</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/users/" className="nav-link">Users</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/customers/register" className="nav-link">Register Customer</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/sales/add" className="nav-link">Record Sale</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/payment/add" className="nav-link">Record Payment</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/customers/" className="nav-link">Customers</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/comission/add" className="nav-link">Add Comission</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/discounts/add" className="nav-link">Add Discount</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}