import Home from '~/Pages/Home/Home';
import Profile from '~/Pages/Profile/Profile';
import NotSibarLayout from '~/Layouts/NotSibarLayout';
import config from '~/configs';

export const publicRoutes = [
    {
        path: config.routeConfig.home,
        component: Home,
    },

    {
        path: config.routeConfig.search,
        component: Home,
    },

    {
        path: config.routeConfig.profile,
        component: Profile,
        layout: NotSibarLayout,
    },
];
