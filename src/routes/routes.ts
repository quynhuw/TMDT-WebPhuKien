import AdminDashboard from "@/pages/AdminDashboard";
import AccountPage from "../pages/Account";
import CartPage from "../pages/Cart/CartPage";
import HomePage from "../pages/HomePage/HomePage";
import ProductDetailPage from "../pages/ProductDetail/ProductDetailPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import LoginRegister from "../pages/Users";
import ForgotPassPage from "../pages/Users/FogotPassPage";

const pathName = {
  homepage: "/",
  user: "/user",
  forgot_pass: "/forgot_pass",
  account: "/account",
  product_detail: "/product_detail",
  products: "/products",
  cart: "/cart",
  admin: "admin_dashboard",
};

const routes = [
  { path: pathName.homepage, element: HomePage },
  { path: pathName.user, element: LoginRegister },
  { path: pathName.forgot_pass, element: ForgotPassPage },
  { path: pathName.account, element: AccountPage },
  { path: pathName.product_detail, element: ProductDetailPage },
  { path: pathName.products, element: ProductsPage },
  { path: pathName.cart, element: CartPage },
  { path: pathName.admin, element: AdminDashboard },
];

export default routes;
