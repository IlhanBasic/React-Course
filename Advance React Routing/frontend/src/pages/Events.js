import { Link } from "react-router-dom";

const DUMMY = [
  { id: "p1", title: "event1" },
  { id: "p2", title: "event2" },
  { id: "p3", title: "event3" },
];
function EventsPage() {
  return (
    <>
      <h1>Event page !</h1>
      <ul>
        {DUMMY.map((item) => {
          return (
            <li key={item.id}>
              <Link to={`/events/${item.id}`}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default EventsPage;
