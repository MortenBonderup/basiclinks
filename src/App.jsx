import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import First from "./First";
import Second from "./Second";
import NotFound from "./NotFound";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/basiclinks/",
    element: <Layout />,
    children: [
      {
        path: "first",
        element: <First />,
      },
      {
        path: "second",
        element: <Second />,
      },
      {
        path: "*",
        element: <NotFound />,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
