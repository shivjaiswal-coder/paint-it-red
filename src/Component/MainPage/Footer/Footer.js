import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div>
            <div class="footer-dark">
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="#">Hot Paintings</a></li>
                                <li><a href="#">Premium Paintings</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-6 col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                <li><a href="#">Company</a></li>
                                <li><a href="#">Team</a></li>
                            </ul>
                        </div>
                        <div class="col-md-6 item text">
                            <h3>Paint-it-red</h3>
                            <p>Three smart Painters.Three smart Painters.Three smart Painters.Three smart Painters.Three smart Painters.</p>
                        </div>
                        <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
                    </div>
                    <p class="copyright">Company Name © 2022</p>
                </div>
            </footer>
        </div>
        </div>
    )
}

export default Footer
