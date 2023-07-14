import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import { AddNewBook } from "../pages/AddNewBook";
import App from "../App";
import { AllBooks } from "../pages/AllBooks";
import DetailsBook from "../components/DetailsBook";
import { UpdateBook } from "../components/UpdateBook";

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
        path: "/book-details/:id",
        element: (
          <DetailsBook
            _id={""}
            title={""}
            author={""}
            genre={""}
            publicationDate={""}
            reviews={[]}
          />
        ),
      },
      {
        path: "/update-book/:id",
        element: <UpdateBook />,
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
