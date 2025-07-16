import LOGO from "/img/dc-logo-bg.png";
import {
    dcComicsLinks,
    shopLinks,
    dcLinks,
    sitesLinks,
    linkBio,
} from "../assets/linkFooter";
import {
    DcComicsLinks,
    ShopLinks,
    DcLinks,
    SitesLinks,
    LinkBio,
} from "./FooterList";

export default function Footer() {
    return (
        <footer>
            <div className="footer-bg text-white pt-4">
                <div className="container-fluid">
                    <div className="row">
                        {/* Prima colonna: 2 ul */}
                        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                            <ul className="list-unstyled fs-3 mb-4">
                                <li className="footer-title fw-bold fs-4 mb-2">DC COMICS</li>
                                {dcComicsLinks.map(link => (
                                    <li key={link.id}>
                                        <DcComicsLinks title={link.title} />
                                    </li>
                                ))}
                            </ul>
                            <ul className="list-unstyled fs-3 mb-4">
                                <li className="footer-title fw-bold fs-4 mb-2">SHOP</li>
                                {shopLinks.map(link => (
                                    <li key={link.id}>
                                        <ShopLinks title={link.title} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Seconda colonna: 1 ul */}
                        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                            <ul className="list-unstyled fs-3 mb-4">
                                <li className="footer-title fw-bold fs-4 mb-2">DC</li>
                                {dcLinks.map(link => (
                                    <li key={link.id}>
                                        <DcLinks title={link.title} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Terza colonna: 1 ul */}
                        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                            <ul className="list-unstyled fs-3 mb-4">
                                <li className="footer-title fw-bold mb-2">SITES</li>
                                {sitesLinks.map(link => (
                                    <li key={link.id}>
                                        <SitesLinks title={link.title} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <img src={LOGO} alt="DC LOGO GRANDE" className="footerlogoimg img-fluid" />
            </div>

            <div className="divlitghgrey d-flex align-items-center justify-content-around px-4 py-3">
                <button className="btn btn-outline-primary bg-transparent text-white fw-bold fs-5">
                    SIGN-UP NOW!
                </button>
                <div className="d-flex align-items-center gap-3">
                    {linkBio.map(item => (
                        <a href="#" key={item.id}>
                            <LinkBio img={item.img} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}