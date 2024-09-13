import Home from "./pages/Home";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import Movie from "./pages/Movie";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />, // Handles errors within route elements
  },
  {
    path: "/actors",
    element: <Actors />,
  },
  {
    path: "/directors",
    element: <Directors />,
  },
  {
    path: "/movie/:id",
    element: <Movie />,
  },
  // Catch-all route for undefined paths
  {
    path: "*",
    element: <ErrorPage />, // This will render ErrorPage for any non-matching routes
  },
];

export default routes;
