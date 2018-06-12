import Dashboard from '../views/Dashboard/Dashboard';

import Users from '../views/Users/Users';
import Test from '../views/Test/Test';
import NotFoundPage from '../views/NotFoundPage/NotFoundPage';

const indexRoutes = [
    { path: `${process.env.PUBLIC_URL}/test`, component: Test },
    { path: `${process.env.PUBLIC_URL}/users`, component: Users },
    { path: `${process.env.PUBLIC_URL}/dashboard`, component: Dashboard },
    { path: `${process.env.PUBLIC_URL}/404`, component: NotFoundPage },
    { path: `${process.env.PUBLIC_URL}/`, component: Dashboard, exact: true, redirect: `${process.env.PUBLIC_URL}/dashboard` }
];

export default indexRoutes;