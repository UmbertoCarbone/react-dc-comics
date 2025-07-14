import FB from "/img/footer-facebook.png";
import TW from "/img/footer-twitter.png";
import YT from "/img/footer-youtube.png";
import PINT from "/img/footer-pinterest.png";
import PS from "/img/footer-periscope.png";
import LOGO from "/img/dc-logo-bg.png"

export default function Footer() {
    return (
        <>
            <footer className="footer-bg text-white pt-4">

                <div className="container">
                    <div className="row">
                        {/* Prima colonna: 2 ul */}
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <ul className="list-unstyled fs-3 mb-4">
                                <li className="footer-title fw-bold fs-4 mb-2">DC COMICS</li>
                                <li><a href="#">Characters</a></li>
                                <li><a href="#">Comics</a></li>
                                <li><a href="#">Movies</a></li>
                                <li><a href="#">TV</a></li>
                                <li><a href="#">Games</a></li>
                                <li><a href="#">Videos</a></li>
                                <li><a href="#">News</a></li>
                            </ul>
                            <ul className="list-unstyled fs-3 mb-4">
                                <li className="footer-title fw-bold fs-4 mb-2">SHOP</li>
                                <li><a href="#">Shop DC</a></li>
                                <li><a href="#">Shop DC Collectibles</a></li>
                            </ul>
                        </div>
                        {/* Seconda colonna: 1 ul */}
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <ul className="list-unstyled fs-3 mb-4">
                                <li className="footer-title fw-bold fs-4 mb-2">DC</li>
                                <li><a href="#">Terms Of Use</a></li>
                                <li><a href="#">Privacy Policy(New)</a></li>
                                <li><a href="#">Ad Choices</a></li>
                                <li><a href="#">Advertising</a></li>
                                <li><a href="#">jobs</a></li>
                                <li><a href="#">Subscriptions</a></li>
                                <li><a href="#">Talent Workshops</a></li>
                                <li><a href="#">CPSC Certificates</a></li>
                                <li><a href="#">Ratings</a></li>
                                <li><a href="#">Shop Help</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        {/* Terza colonna: 1 ul */}
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <ul className="list-unstyled fs-3 mb-4">
                                <li className="footer-title fw-bold mb-2">SITES</li>
                                <li><a href="#">DC</a></li>
                                <li><a href="#">MAD Magazine</a></li>
                                <li><a href="#">DC Kids</a></li>
                                <li><a href="#">DCUniverse</a></li>
                                <li><a href="#">DC Power Visa</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <img src={LOGO} alt="DC LOGO GRANDE" className="footerlogoimg img-fluid" />
            </footer>

            <div className="divlitghgrey d-flex align-items-center justify-content-around px-4 py-3">
                <button className="btn btn-outline-primary bg-transparent text-white fw-bold fs-5">
                    SIGN-UP NOW!
                </button>
                <div className="d-flex align-items-center gap-3">
                    <span className="me-2 fs-4 text-primary fw-bold">FOLLOW US</span>
                    <a href="#"><img src={FB} alt="Facebook" />
                    </a>
                    <a href="#"><img src={TW} alt="Twitter" />
                    </a>
                    <a href="#"><img src={YT} alt="YouTube" />
                    </a>
                    <a href="#"><img src={PINT} alt="Pinterest" />
                    </a>
                    <a href="#"><img src={PS} alt="Periscope" />
                    </a>
                </div>
            </div>

        </>
    )
}