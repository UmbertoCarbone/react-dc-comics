import foto1 from '/img/buy-comics-digital-comics.png';
import foto2 from "/img/buy-comics-merchandise.png"
import foto3 from "/img/buy-comics-subscriptions.png"
import foto4 from "/img/buy-comics-shop-locator.png"
import foto5 from "/img/buy-dc-power-visa.svg"



export default function Main() {
    return (
        <main>
            
            <div className="divblack"><h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum saepe, neque dolore ex architecto nobis.</h1></div>
            <div className="divlightblue d-flex justify-content-center align-items-center">
                <a href="#"><img src={foto1} alt="Digital Comics" />DIGITAL COMICS</a>
                <a href="#"><img src={foto2} alt="DC Merchandise" />DIGITAL COMICS</a>
                <a href="#"> <img src={foto3} alt="Subscription" />DIGITAL COMICS</a>
                <a href="#"> <img src={foto4} alt="Shop Locator" />DIGITAL COMICS</a>
                <a href="#"> <img src={foto5} alt="Power Visa" />DIGITAL COMICS</a>
            </div>
        </main>
    )
}

