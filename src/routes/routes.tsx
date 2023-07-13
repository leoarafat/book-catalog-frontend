import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";

import { AddNewBook } from "../pages/AddNew";
import App from "../App";
import { AllBooks } from "../pages/AllBooks";
import { DetailsBook } from "../components/DetailsBook";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/add-new-book",
        element: <AddNewBook />,
      },
      {
        path: "/all-books",
        element: <AllBooks />,
      },
      {
        path: "/details-book/:id",
        element: <DetailsBook />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <Register />,
      },
    ],
  },
]);
