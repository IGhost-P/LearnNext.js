import Head from "next/head";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  const pageHeadData = (
    <Head>
      <title>Home</title>
      <meta>
        <meta name="description" content="This is a description" />
      </meta>
    </Head>
  );

  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <mta name="description" content={`미세 조정 ${event.content}`} />
      </Head>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;
