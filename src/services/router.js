import {
    Routes,
    Route,
    Navigate,
    useLocation
  } from "react-router-dom";

import {useSelector } from 'react-redux';
import {selectUser} from './userSlice';

import {AUTHROUTES ,ROUTES, PRIVATEROUTES} from '../store/constants'

import {toastify} from './toastify'

function RequireAuth({ route }) {
  console.log('I am in ROute.js');
  let user = useSelector(selectUser);
  console.log(user);
  let location = useLocation();

  if (!user.uid && route.auth) {
    toastify({type:'warning', message:'No auth'});
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return route.component;
}

function Router() {


    const routes = Object.keys(ROUTES).map(route => 
        <Route key={route} path={ROUTES[route].path} element={ROUTES[route].component} />)
  
    const authroutes = Object.keys(AUTHROUTES).map(route => 
        <Route key={route} 
        path={AUTHROUTES[route].path}  
        element={ <RequireAuth route={AUTHROUTES[route]} />   }  />)
    
        const privateroutes = Object.keys(PRIVATEROUTES).map(route => 
        <Route key={route} path={PRIVATEROUTES[route].path} element={PRIVATEROUTES[route].component} />)
       
        return (
        <div>
            <Routes>
            {routes}      
            {authroutes}
            {privateroutes}      
            </Routes>
      </div>
    );
  }

export default Router;

