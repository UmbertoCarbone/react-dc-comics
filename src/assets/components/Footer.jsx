import FB from "/img/footer-facebook.png";
import TW from "/img/footer-twitter.png";
import YT from "/img/footer-youtube.png";
import PINT from "/img/footer-pinterest.png";
import PS from "/img/footer-periscope.png";
import LOGO from  "/img/dc-logo-bg.png" 

export default function Footer() {
    return (
        <>
            <footer className="footer-bg text-white pt-4">
                <img src={LOGO} alt="DC LOGO GRANDE" className="footer-top-img" />
                <div className="container">
                    <div className="row">
                        {/* Prima colonna: 2 ul */}
                        <div className="col-md-2">
                            <ul className="list-unstyled fs-3 mb-4">
                                <li className="footer-title fw-bold fs-4 mb-2">DC COMICS</li>
                                <li><a href="#">ewew</a></li>
                                <li><a href="#">ewew</a></li>
                                <li><a href="#">ewew</a></li>
                                <li><a href="#">ewew</a></li>
                                <li><a href="#">ewew</a></li>
                                <li><a href="#">ewew</a></li>
                                <li><a href="#">ewe</a></li>
                            </ul>
                            <ul className="list-unstyled fs-3 mb-4">
                                <li className="footer-title fw-bold fs-4 mb-2">SHOP</li>
                                <li><a href="#">ewew</a></li>
                                <li><a href="#">ewew</a></li>
                            </ul>
                        </div>
                        {/* Seconda colonna: 1 ul */}
                        <div className="col-md-2">
                            <ul className="list-unstyled fs-3 mb-4">
                                <li className="footer-title fw-bold fs-4 mb-2">DC</li>
                                <li><a href="#">EWEWEW</a></li>
                                <li><a href="#">EWEWEW</a></li>
                                <li><a href="#">EWEW</a></li>
                                <li><a href="#">EWEW</a></li>
                                <li><a href="#">DDDDD</a></li>
                                <li><a href="#">DDDDD</a></li>
                                <li><a href="#">DDDDD</a></li>
                                <li><a href="#">DDDDD</a></li>
                                <li><a href="#">DDDDD</a></li>
                                <li><a href="#">DDDDD</a></li>
                                <li><a href="#">DDDDD</a></li>
                            </ul>
                        </div>
                        {/* Terza colonna: 1 ul */}
                        <div className="col-md-2">
                            <ul className="list-unstyled fs-3 mb-4">
                                <li className="footer-title fw-bold mb-2">SITES</li>
                                <li><a href="#">AAAAAA</a></li>
                                <li><a href="#">AAAAAA</a></li>
                                <li><a href="#">AAAAAA</a></li>
                                <li><a href="#">AAAAAA</a></li>
                                <li><a href="#">AAAAAA</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="divlitghgrey">
                {/* Qui il contenuto che vuoi sotto la foto */}
            </div>
        </>
    )
}