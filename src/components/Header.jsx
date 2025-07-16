import dclogo from '/img/dc-logo.png';
import Navbar from "./navbar";

export default function Header({ navbar }) {
    return (
        <header>
            <nav className="navbar">
                <img src={dclogo} alt="DC Logo" />
                {navbar.map((item) => (
                    <Navbar key={`link-header-${item.id}`} title={item.title} />
                ))}
            </nav>
        </header>
    );
}