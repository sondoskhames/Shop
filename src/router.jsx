import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products, { productsLoader } from "./pages/Products";
import ProductDetail, { productLoader } from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import RouteError from "./pages/RouteError";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <RouteError />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "products",
        element: <Products />,
        loader: productsLoader,
        // تغيير ?category بس ماعملش fetch جديد
        shouldRevalidate: ({ currentUrl, nextUrl }) =>
          currentUrl.pathname !== nextUrl.pathname,
      },
      {
        path: "products/:id",
        element: <ProductDetail />,
        loader: productLoader,
      },
      { path: "about", element: <About /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;