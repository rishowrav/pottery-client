import { createBrowserRouter } from "react-router-dom";
import Layouts from "../layout/Layouts";
import Home from "../pages/Home";
import AllArts from "../pages/AllArts";
import MyArts from "../pages/MyArts";
import AddCraft from "../pages/AddCraft";

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
      },
      {
        path: "/myArts",
        element: <MyArts></MyArts>,
      },
      {
        path: "/addCraft",
        element: <AddCraft></AddCraft>,
      },
    ],
  },
]);

export default router;
