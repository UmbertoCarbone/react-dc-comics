export default function ComicCard({ thumb, title }) {
  return (
    <div className="">
      <img src={thumb} className="img" alt={title} />
      <p className="text-center mt-3">{title}</p>
    </div>
  );
}