import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import profilePicture from './profilePicture.png';

const Login = (props) => {

    const [credentials, setCredential] = useState({ email: "", password: "" });
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:4000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json);
        // Check the login success and redirect
        if (json.success) {
            localStorage.setItem("token", json.authToken);
            props.showAlert("Logged in Successfully","success");
            navigate("/");
        }
        else {
            props.showAlert("Invalid Credential","danger");
        }
    }

    const onChange = (e) => {
        setCredential({ ...credentials, [e.target.name]: e.target.value });
    }

    return (
        <div className="container">
            <h2 className="my-4">Login</h2>
            <form onSubmit={handleSubmit} className="g-3">
                <div className="mb-3 col-md-4">
                    <label htmlhtmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} name="email" id="email" aria-describedby="emailHelp" onChange={onChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3 col-md-4">
                    <label htmlhtmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} name="password" id="password" onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export default Login
