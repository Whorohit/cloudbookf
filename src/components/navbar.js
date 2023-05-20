import React from 'react'
import {
   
    Link
  } from "react-router-dom";
  
export default function navbar() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" style={{ fontFamily: "Golos Text" }}>
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" style={{ fontFamily: "Golos Text" }} to="/">CLOUD BOOK</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="main_nav">
                    <ul className="navbar-nav ms-auto ">
                        <li className="nav-item pe-3"><Link className="nav-link" to="/"> Search </Link></li>
                    </ul>
                    <button classNameName='btn btn-light'><Link className="nav-link text-dark" to="/add">Add Book</Link></button>
                </div>
            </div>
        </nav>
    )
}
