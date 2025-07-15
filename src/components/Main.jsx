import comics from "../comics";

import foto1 from '/img/buy-comics-digital-comics.png';
import foto2 from "/img/buy-comics-merchandise.png"
import foto3 from "/img/buy-comics-subscriptions.png"
import foto4 from "/img/buy-comics-shop-locator.png"
import foto5 from "/img/buy-dc-power-visa.svg"
import jumbotron from "/img/jumbotron.jpg"


const list = [
    {
        id: 1,
        title: "Digital Comics",
        img: foto1
    },
    {
        id: 2,
        title: "DC Merchandise",
        img: foto2
    },
    {
        id: 3,
        title: "Subscription",
        img: foto3
    },
    {
        id: 4,
        title: "Shop Locator",
        img: foto4
    },
    {
        id: 5,
        title: "Power Visa",
        img: foto5
    }
];
export default function Main() {
    return (

        <main>
            <div className="jumbotron">
                <img src={jumbotron} alt="Jumbotron" />
            </div>
            <div className="divblack">
                <div className="container pt-5">
                    <div className="row">
                        {comics.map((comic) => (
                            <div className="col-12 col-sm-4 col-lg-2" key={comic.id}>
                                <div className="">
                                    <img src={comic.thumb} className="img" />
                                    <p className="text-center mt-3">{comic.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="divlightblue d-flex justify-content-center align-items-center">
                {list.map(item => (
                    <div key={item.id}>
                        <img src={item.img} alt={item.title} />
                        {item.title}
                    </div>
                ))}
                {/* <a href="#"><img src={foto1} alt="Digital Comics" />DIGITAL COMICS</a>
                <a href="#"><img src={foto2} alt="DC Merchandise" />DC Merchandise</a>
                <a href="#"> <img src={foto3} alt="Subscription" />Subscription</a>
                <a href="#"> <img src={foto4} alt="Shop Locator" />Shop Locator</a>
                <a href="#"> <img src={foto5} alt="Power Visa" />Power Visa</a> */}
            </div>
        </main>

    )
}

