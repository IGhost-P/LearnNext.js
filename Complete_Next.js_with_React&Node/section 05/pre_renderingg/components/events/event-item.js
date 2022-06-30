import Link from "next/link";

export default function EventItem({
  id,
  location,
  title,
  date,
  image,
  description,
}) {
  const humanDate = new Date(date).toLocaleDateString({
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const humanLoaction = location.replaceAll(",", "\n");

  return (
    <div>
      <div>
        {" "}
        <h1>title</h1>
      </div>
      <div>
        <img src={"/" + image} alt={title} width={200} height={200} />
      </div>
      <div>
        <h2>{description}</h2>
      </div>
      <div>
        <h2>{humanDate}</h2>
      </div>
      <div>
        <h2>{humanLoaction}</h2>
      </div>
      <div>
        <Link href={`/events/${id}`}>Explore Evnet</Link>
      </div>
    </div>
  );
}
