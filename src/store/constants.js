import Register from '../pages/Register';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import NotFound from '../pages/NotFound';

export const AUTHROUTES = {
    register:{
        path: '/register',
        exact: true,
        component: <Register/>,
        auth: false
    },
    login:{
        path: '/login',
        exact: true,
        component: <Login/>,
        auth: false
    },    
    profile:{
        path: '/profile',
        exact: true,
        component: <Profile/>,
        auth: true
    },

}

export const ROUTES={
    home:{
        path: '/home',
        exact: true,
        component: <Home/>,
        auth: false
    },
}

export const PRIVATEROUTES={
    notFound:{
        path: '*',
        exact: false,
        component: <NotFound/>,
        auth: false
    },
}