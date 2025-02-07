import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import NotFound from "./NotFound";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/basiclinks/",
    element: <Layout />,
    children: [
      {
        path: "first",
        element: <FirstPage />,
      },
      {
        path: "second",
        element: <SecondPage />,
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
