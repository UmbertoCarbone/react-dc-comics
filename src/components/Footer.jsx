 
import LOGO from "/img/dc-logo-bg.png"; 
const linkBio = [
    { id: 1, title: "DC", href: "#", img: "/img/footer-facebook.png" },
    { id: 2, title: "MAD Magazine", href: "#", img:"/img/footer-twitter.png" },
    { id: 3, title: "DC Kids", href: "#", img:"/img/footer-youtube.png"},
    { id: 4, title: "DCUniverse", href: "#", img:"/img/footer-pinterest.png" },
    { id: 5, title: "DC Power Visa", href: "#", img:"/img/footer-periscope.png" },
];




const dcComicsLinks = [
    { id: 1, title: "Characters", href: "#" },
    { id: 2, title: "Comics", href: "#" },
    { id: 3, title: "Movies", href: "#" },
    { id: 4, title: "TV", href: "#" },
    { id: 5, title: "Games", href: "#" },
    { id: 6, title: "Videos", href: "#" },
    { id: 7, title: "News", href: "#" },
];

const shopLinks = [
    { id: 1, title: "Shop DC", href: "#" },
    { id: 2, title: "Shop DC Collectibles", href: "#" },
];

const dcLinks = [
    { id: 1, title: "Terms Of Use", href: "#" },
    { id: 2, title: "Privacy Policy(New)", href: "#" },
    { id: 3, title: "Ad Choices", href: "#" },
    { id: 4, title: "Advertising", href: "#" },
    { id: 5, title: "jobs", href: "#" },
    { id: 6, title: "Subscriptions", href: "#" },
    { id: 7, title: "Talent Workshops", href: "#" },
    { id: 8, title: "CPSC Certificates", href: "#" },
    { id: 9, title: "Ratings", href: "#" },
    { id: 10, title: "Shop Help", href: "#" },
    { id: 11, title: "Contact", href: "#" },
];

const sitesLinks = [
    { id: 1, title: "DC", href: "#" },
    { id: 2, title: "MAD Magazine", href: "#" },
    { id: 3, title: "DC Kids", href: "#" },
    { id: 4, title: "DCUniverse", href: "#" },
    { id: 5, title: "DC Power Visa", href: "#" },
];

export default function Footer() {
    return (
        <>
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
                                            <a href="#">{link.title}</a>
                                        </li>
                                    ))}
                                </ul>
                                <ul className="list-unstyled fs-3 mb-4">
                                    <li className="footer-title fw-bold fs-4 mb-2">SHOP</li>
                                    {shopLinks.map(link => (
                                        <li key={link.id}>
                                            <a href="#">{link.title}</a>
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
                                            <a href="#">{link.title}</a>
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
                                            <a href={link.href}>{link.title}</a>
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
                                <img src={item.img} alt="profile" />

                            </a>
                        ))}
                    </div>
                </div>
            </footer>
        </>
    )
}