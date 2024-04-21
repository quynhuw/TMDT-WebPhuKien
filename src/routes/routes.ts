import HomePage from "../pages/HomePage/HomePage"
import LoginRegister from "../pages/Users";
import ForgotPassPage from "../pages/Users/FogotPassPage";

const pathName = {
    homepage: '/',
    user: '/user',
    forgot_pass: '/forgot_pass'
}

const routes = [
        { path: pathName.homepage, element: HomePage },
        {path: pathName.user, element: LoginRegister},
        {path: pathName.forgot_pass, element: ForgotPassPage},
    ]
export default routes;