import { RouterProvider, createBrowserRouter, Redirect } from "react-router-dom";
import Layout from "./Layout";
import First from "./First";
import Second from "./Second";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // This sets the default route
        element: <Redirect path="/basiclinks/" />, // Your default component
      },
      {
        path: "/basiclinks/",
        element: <Layout />
      },
      {
        path: "/first",
        element: <First />,
      },
      {
        path: "/second",
        element: <Second />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
