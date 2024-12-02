import { Toaster } from "react-hot-toast";
import { productsData } from "./api/api";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";
import Login from "./pages/Login";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Toaster />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productsData,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

//! ----------  finish   ------------------------

