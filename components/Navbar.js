/* eslint-disable react/jsx-no-undef */


import React from 'react'
import { Link} from 'react-router-dom';
export default function Navbar() {


// import React, { useState } from 'react'
// import { Link, useNavigate } from "react-router-dom";
// import Badge from "@material-ui/core/Badge";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import { useCart } from './ContextReducer';
// import Modal from '../Modal';
// import Cart from '../screens/Cart';
// export default function Navbar(props) {

//     const [cartView, setCartView] = useState(false)
//     localStorage.setItem('temp', "first")
//     let navigate = useNavigate();
//     const handleLogout = () => {
//         localStorage.removeItem('token')

//         navigate("/login")
//     }

//     const loadCart = () => {
//         setCartView(true)
//     }

//     const items = useCart();
    return (
        <div>



<nav className="navbar navbar-expand-lg navbar-dark bg-success ">
    <div className="container-fluid">
        <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>  
                </li>
                            
                <li className="nav-item">
                    <Link className="nav-link"  to="/login">Login</Link>  
                </li>
                <li className="nav-item">
                    <Link className="nav-link"  to="/createuser">Signup</Link>  
                </li>
            </ul>
        </div> 
    </div>       
</nav> 
        </div>
    )
} 



