//import photo
import dclogo from '/img/dc-logo.png';


//expor function
export default function Header() {
    return (
        <header>

            <nav className="navbar">
                <img src={dclogo} alt="DC Logo" />
                <a href="#">CHARACTERS</a>
                <a href="#">COMICS</a>
                <a href="#">MOVIES</a>
                <a href="#">TV</a>
                <a href="#">GAMES</a>
                <a href="#">COLLECTIBLES</a>
                <a href="#">VIDEOS</a>
                <a href="#">FANS</a>
                <a href="#">NEWS</a>
                <a href="#">SHOP</a>
            </nav>
        </header>
    )
}