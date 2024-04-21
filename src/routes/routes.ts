import HomePage from "../pages/HomePage/HomePage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";

const pathName = {
  homepage: "/",
  products: "/products",
};

const routes = [
  { path: pathName.homepage, element: HomePage },
  { path: pathName.products, element: ProductsPage },
];
export default routes;
