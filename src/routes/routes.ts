import HomePage from "../pages/HomePage/HomePage"
import ProductDetailPage from "../pages/ProductDetail/ProductDetailPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import LoginRegister from "../pages/Users";
import ForgotPassPage from "../pages/Users/FogotPassPage";

const pathName = {
    homepage: '/',
    user: '/user',
    forgot_pass: '/forgot_pass',
    product_detail: '/product_detail',
    products: "/products",
}

const routes = [
        { path: pathName.homepage, element: HomePage },
        {path: pathName.user, element: LoginRegister},
        {path: pathName.forgot_pass, element: ForgotPassPage},
        {path: pathName.product_detail, element: ProductDetailPage},
        { path: pathName.products, element: ProductsPage },
    ]

export default routes;
