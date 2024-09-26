import { Link, useParams } from "react-router-dom";

function EventDetailPage() {
  const params = useParams();
  return (
    <>
      <h1>Event Datail Page</h1>
      <p>{params.eventsId}</p>
      <Link to='..' relative="path">Go Back</Link>
    </>
  );
}
export default EventDetailPage;
