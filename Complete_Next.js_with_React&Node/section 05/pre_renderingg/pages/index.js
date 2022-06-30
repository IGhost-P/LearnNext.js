import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";
export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <h1>The Home Page</h1>
      <EventList item={featuredEvents} />
    </div>
  );
}
