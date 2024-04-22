import AccountPage from "../pages/Account";
import HomePage from "../pages/HomePage/HomePage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import LoginRegister from "../pages/Users";
import ForgotPassPage from "../pages/Users/FogotPassPage";

const pathName = {
  homepage: "/",
  products: "/products",
  user: "/user",
  forgot_pass: "/forgot_pass",
  account: "/account",
};

const routes = [
  { path: pathName.homepage, element: HomePage },
  { path: pathName.products, element: ProductsPage },
  { path: pathName.user, element: LoginRegister },
  { path: pathName.forgot_pass, element: ForgotPassPage },
  { path: pathName.account, element: AccountPage },
];
export default routes;
