import React from 'react'

const Footer = () => {
    return (
        <div className="container">
            <div className="container mt-5">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                        <span className="text-muted">&copy; 2021 Star Industries</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><a className="text-muted" href="https://twitter.com/atultrp_"><i className="fab fa-twitter fa-lg social-icons"></i></a></li>
                        <li className="ms-3"><a className="text-muted" href="https://github.com/atultrp"><i className="fab fa-github fa-lg social-icons"></i></a></li>
                        <li className="ms-3"><a className="text-muted" href="https://instagram.com/atultrp"><i className="fab fa-instagram fa-lg social-icons"></i></a></li>
                        <li className="ms-3"><a className="text-muted" href="https://www.linkedin.com/in/atultrp-"><i className="fab fa-linkedin fa-lg social-icons"></i></a></li>
                        <li className="ms-3"><a className="text-muted" href="mailto: atul31815@gmail.com"><i className="fas fa-envelope fa-lg social-icons"></i></a></li>
                    </ul>
                </footer>
            </div>
        </div>
    )
}

export default Footer
