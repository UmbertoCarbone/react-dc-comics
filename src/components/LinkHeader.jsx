export default function LinkHeader({ img, title }) {
    return (
        <div className="">
            <img src={img} className="img.img" alt={title} />
            <p className="">{title}</p>
        </div>
    );
}