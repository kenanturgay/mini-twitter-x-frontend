import { useContext  } from 'react';
import { Outlet, Navigate  } from "react-router-dom";
import { UserContext } from '../UserContext';

export default function ProtectedRoutes() {
  const {token} = useContext(UserContext);
  
    return token ? <Outlet/> : <Navigate to='/login'/>
}