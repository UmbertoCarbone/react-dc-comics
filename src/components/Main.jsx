import jumbotron from "/img/jumbotron.jpg";
import ComicCard from "./ComicCard";
import LinkHeader from "./linkHeader";

export default function Main({ comics, linkHeader }) {
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
                {linkHeader.map((item) => (
                    <div key={item.id}>
                        <LinkHeader img={item.img} title={item.title} />
                    </div>
                ))}
            </div>
        </main>
    );
}


