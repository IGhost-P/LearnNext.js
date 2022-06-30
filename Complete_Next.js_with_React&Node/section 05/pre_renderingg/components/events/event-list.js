import EventItem from "./event-item";
export default function EventList({ item }) {
  return (
    <ul>
      {item.map((event) => {
        const { id, title, description, location, date, image, isFeatured } =
          event;
        return (
          <EventItem
            ket={id}
            id={id}
            title={title}
            description={description}
            location={location}
            date={date}
            image={image}
            isFeatured={isFeatured}
          />
        );
      })}
    </ul>
  );
}
