//import photo
import dclogo from '/img/dc-logo.png';

const menu = [
    {
        id: 1,
        href: "#",
        title: "Characters",

    },
    {
        id: 2,
        href: "#",
        title: "Comics",

    },
    {
        id: 3,
        href: "#",
        title: "Movies",

    },
    {
        id: 4,
        href: "#",
        title: "TV",

    },
    {
        id: 5,
        href: "#",
        title: "Games",

    },
    {
        id: 6,
        href: "#",
        title: "Collectibles",

    },
    {
        id: 7,
        href: "#",
        title: "Videos",

    },
    {
        id: 8,
        href: "#",
        title: "Fans",

    },
    {
        id: 9,
        href: "#",
        title: "News",

    },
    {
        id: 10,
        href: "#",
        title: "Shop",

    }
];


export default function Header() {
    return (
        <header>
            <nav className="navbar">
                <img src={dclogo} alt="DC Logo" />
                {
                    menu.map((item) => {
                        return (
                            <a classname="" href="#">{item.title}</a>
                        )
                    })
                }
            </nav>
        </header>
    )
}