import { createBrowserRouter } from "react-router-dom";
import Layout from "../Block/Layout";
import HomeScreen from "../Page/HomeScreen";
import Pricelist from "../component/Pricelist";
import Photos from "../component/Photos";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },

      {
        path: "/pricelist",
        element: <Pricelist />,
      },

      {
        path: "/gallery",
        element: <Photos />,
      },
    ],
  },
]);
