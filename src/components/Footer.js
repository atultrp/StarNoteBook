import React from 'react'

const Footer = () => {
    return (
        <div className="container">
            <div class="container mt-5 footer-section">
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div class="col-md-4 d-flex align-items-center">
                        <span class="text-muted">&copy; 2021 Star Industries</span>
                    </div>

                    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li class="ms-3"><a class="text-muted" href="https://twitter.com/atultrp_"><i class="fab fa-twitter fa-lg"></i></a></li>
                        <li class="ms-3"><a class="text-muted" href="https://github.com/atultrp"><i class="fab fa-github fa-lg"></i></a></li>
                        <li class="ms-3"><a class="text-muted" href="https://instagram.com/atultrp"><i class="fab fa-instagram fa-lg"></i></a></li>
                        <li class="ms-3"><a class="text-muted" href="https://www.linkedin.com/in/atultrp-"><i class="fab fa-linkedin fa-lg"></i></a></li>
                        <li class="ms-3"><a class="text-muted" href="mailto: atul31815@gmail.com"><i class="fas fa-envelope fa-lg"></i></a></li>
                        {/* <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use href="#facebook" /></svg></a></li> */}
                    </ul>
                </footer>
            </div>
        </div>
    )
}

export default Footer
