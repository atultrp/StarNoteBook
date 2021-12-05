import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    let location = useLocation();
    let navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem('token');
        navigate("/login");
    }


    // const [user, setUser] = useState([userInitial])

    // const onChange = async (e) => {
    //     e.preventDefault();
    //     const response = await fetch("http://localhost:4000/api/auth/getuser", {
    //         method: 'GET',
    //         headers: {
    //             'auth-token': localStorage.getItem('token')
    //         }
    //     });
    //     const json = await response.json();
    //     console.log(json);
    //     setUser(json);
    // }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Star Notebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${(location.pathname === "/") ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${(location.pathname === "/about") ? "active" : ""}`} to="/about">About</Link>
                            </li>
                        </ul>
                        {!localStorage.getItem('token') ? <form className="d-flex">
                            <Link className="btn btn-outline-light mx-2" to="/login" role="button">Login</Link>
                            <Link className="btn btn-light mx-2" to="/signup" role="button">Signup</Link>
                        </form> :
                            <div>
                                {/* <button className="btn btn-outline-light mx-2 userhead" onChange={onChange} >atultrp</button> */}
                                <button className="btn btn-light mx-2" onClick={handleLogOut}>Logout</button>
                            </div>}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
