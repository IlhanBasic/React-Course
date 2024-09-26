import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import EventsPage from "./pages/Events";
import EventDetailPage from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import RootLayout from "./pages/Root";
import EventLayout from "./pages/EventRoot";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventLayout/>,
        children: [
          { index: true, element: <EventsPage /> },
          { path: ":eventsId", element: <EventDetailPage /> },
          { path: ":eventsId/edit", element: <EditEventPage /> },
          { path: "new", element: <NewEventPage /> },
        ]
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
