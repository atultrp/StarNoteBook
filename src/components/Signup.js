import React from 'react'

const Signup = () => {

    const handleSubmit = () => {

    }

    const onChange = () => {

    }

    return (
        <div className="container">
            {/* <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" id="name" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" name="username" id="username" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" onChange={onChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" id="password" onChange={onChange} />
                    
                        <span id="passwordHelpInline" class="form-text">
                            Must be 8-20 characters long.
                        </span>
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" name="cpassword" id="cpassword" onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form> */}

            <h2 className="my-4">SignUp Page</h2>
            <form className="row g-3">
                <div className="col-md-4">
                    <label htmlFor="validationServer01" className="form-label">Full Name</label>
                    <input type="text" className="form-control is-valid" id="validationServer01" required />
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationServer01" className="form-label">Username</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend3">@</span>
                        <input type="text" className="form-control is-valid" id="validationServer01" required />
                    </div>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationServer01" className="form-label">Email</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend3">@</span>
                        <input type="text" className="form-control is-valid" id="validationServer01" required />
                    </div>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationServer03" className="form-label">Password</label>
                    <input type="text" className="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required />
                    <div id="validationServer03Feedback" class="invalid-feedback">
                        Must be 8-20 characters long.
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationServer03" className="form-label">Confirm Password</label>
                    <input type="text" className="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required />

                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input " type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required />
                        <label class="form-check-label" htmlFor="invalidCheck3">
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
