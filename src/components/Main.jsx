import comics from "../comics";

import foto1 from '/img/buy-comics-digital-comics.png';
import foto2 from "/img/buy-comics-merchandise.png"
import foto3 from "/img/buy-comics-subscriptions.png"
import foto4 from "/img/buy-comics-shop-locator.png"
import foto5 from "/img/buy-dc-power-visa.svg"
import jumbotron from "/img/jumbotron.jpg"
import ComicCard from "./ComicCard";


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
                                <ComicCard thumb={comic.thumb} title={comic.title} />
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

            </div>
        </main>

    )
}



