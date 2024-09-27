import {useLoaderData,json} from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;
  return (
    <>
      {/* {data.isError && <p>{data.message}</p>} */}
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;
export async function loader(){
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return {isError:true,message:'Fetch Failed'}
    // throw new Response(JSON.stringify({message:"Couldn't fetch events"}),{status:500})
    return json({message:"Couldn't fetch events"},{status:500});
  } else {
    return response;
  }
}