export default function LinkHeader({ img, title }) {
    return (
        <div>
            <img src={img} className="img.img" alt={title} />
            <p>{title}</p>
        </div>
    );
}