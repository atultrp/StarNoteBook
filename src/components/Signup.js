import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {

    const [credentials, setCredential] = useState({ name: "", username: "", email: "", password: "", cpassword: "" });
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, username, email, password, cpassword } = credentials;

        if(password !== cpassword){
            props.showAlert("Please match your password and confirm password","danger");
            navigate("/signup");
            return;
        }

        const response = await fetch("http://localhost:4000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, username, email, password })
        });
        const json = await response.json();
        console.log(json);

        // Check the signup success and redirect
        if (json.success) {
            localStorage.setItem("token", json.authToken);
            navigate("/");
            props.showAlert("Account Created Successfully","success");
        }
        else {
            props.showAlert("Invalid Details","danger");
        }
    }

    const onChange = (e) => {
        setCredential({ ...credentials, [e.target.name]: e.target.value });
    }

    return (
        <div className="container">
            <h2 className="mt-4">Register Account</h2>
            <p className="mb-4 lead">Please SignUp to use Star Notebook</p>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-4">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input type="text" className="form-control is-valid" id="name" name="name" onChange={onChange} value={credentials.name} required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="username" className="form-label">Username</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend3">@</span>
                        <input type="text" className="form-control is-valid" id="username" name="username" onChange={onChange} value={credentials.username} minLength={5} required />
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="email" className="form-label">Email</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend3">@</span>
                        <input type="email" className="form-control is-valid" id="email" name="email" onChange={onChange} value={credentials.email} required />
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control is-invalid" id="password" name="password" onChange={onChange} value={credentials.password} minLength={5} aria-describedby="validationServer03Feedback" required />
                    <div id="validationServer03Feedback" className="invalid-feedback">
                        Must be 5-20 characters long.
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control is-invalid" id="cpassword" name="cpassword" onChange={onChange} value={credentials.cpassword} minLength={5} aria-describedby="validationServer03Feedback" required />

                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input " type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required />
                        <label className="form-check-label" htmlFor="invalidCheck3">
                            Agree to terms and conditions
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default Signup
