import config from "../config/index";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Product from "../pages/Product";
import SignIn from "../pages/SignIn";
const publicRoutes = [
    {
        path: config.routes.home,
        element: Home,
    },
    {
        path: config.routes.product,
        element: Product,
    },
    {
        path: config.routes.signIn,
        element: SignIn,
    },
    {
        path: config.routes.notFound,
        element: NotFound,
        layout: null,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
