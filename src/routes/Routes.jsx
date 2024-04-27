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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/allArts",
        element: <AllArts></AllArts>,
        loader: () => fetch("http://localhost:3000/crafts"),
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
        path: "/cardDetails",
        element: (
          <PrivateRoute>
            <CardDetails></CardDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
