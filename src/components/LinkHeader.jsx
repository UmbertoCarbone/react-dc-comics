export default function linkHeader({ img, title }) {
    return (
        <div className="">
            <img src={img} className="img" alt={title} />
            <p className="text-center">{title}</p>
        </div>
    );
}