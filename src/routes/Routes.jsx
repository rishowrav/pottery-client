import { createBrowserRouter } from "react-router-dom";
import Layouts from "../layout/Layouts";
import Home from "../pages/Home";
import AllArts from "../pages/AllArts";
import MyArts from "../pages/MyArts";
import AddCraft from "../pages/AddCraft";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../privateRoute/PrivateRoute";
import CardDetails from "../components/CardDetails";
import SelectedCategories from "../components/SelectedCategories";
import CraftUpdate from "../pages/CraftUpdate";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("https://pottery-backend-server.vercel.app/crafts"),
      },
      {
        path: "/allArts",
        element: <AllArts></AllArts>,
        loader: () => fetch("https://pottery-backend-server.vercel.app/crafts"),
      },
      {
        path: "/myArts",
        element: (
          <PrivateRoute>
            <MyArts></MyArts>
          </PrivateRoute>
        ),
      },
      {
        path: "/addCraft",
        element: (
          <PrivateRoute>
            <AddCraft></AddCraft>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/cardDetails/:id",
        element: (
          <PrivateRoute>
            <CardDetails></CardDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://pottery-backend-server.vercel.app/crafts/${params.id}`
          ),
      },
      {
        path: "/selectedCategories/:categorie",
        element: <SelectedCategories></SelectedCategories>,
        loader: ({ params }) =>
          fetch(
            `https://pottery-backend-server.vercel.app/categories/${params.categorie}`
          ),
      },
      {
        path: "/craftUpdate/:id",
        element: <CraftUpdate></CraftUpdate>,
        loader: ({ params }) =>
          fetch(
            `https://pottery-backend-server.vercel.app/crafts/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
