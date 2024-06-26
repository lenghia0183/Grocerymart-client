import config from '../config/index';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import SignUp from '../pages/SignUp';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Login';
import ProductDetail from '../pages/ProductDetail';
import SecondaryLayout from '../layouts/SecondaryLayout/SecondaryLayout';
import Profile from '../pages/Profile';
import Payment from '../pages/Payment';
import Favorite from '../pages/Favorite';
import Coffee from '../pages/Cofffee';
import Shipping from '../pages/Shipping';
const publicRoutes = [
  {
    path: config.routes.home,
    element: Home,
  },
  {
    path: config.routes.product,
    element: ProductDetail,
    layout: SecondaryLayout,
  },
  {
    path: config.routes.signUp,
    element: SignUp,
    layout: AuthLayout,
  },
  {
    path: config.routes.notFound,
    element: NotFound,
    layout: null,
  },
  {
    path: config.routes.login,
    element: Login,
    layout: AuthLayout,
  },
  {
    path: config.routes.profile,
    element: Profile,
    layout: SecondaryLayout,
  },
  {
    path: config.routes.checkout,
    element: Payment,
    layout: SecondaryLayout,
  },
  {
    path: config.routes.favorite,
    element: Favorite,
    layout: SecondaryLayout,
  },
  {
    path: config.routes.coffee,
    element: Coffee,
    layout: SecondaryLayout,
  },
  {
    path: config.routes.tea,
    element: Coffee,
    layout: SecondaryLayout,
  },
  {
    path: config.routes.cacao,
    element: Coffee,
    layout: SecondaryLayout,
  },
  {
    path: config.routes.shipping,
    element: Shipping,
    layout: SecondaryLayout,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
