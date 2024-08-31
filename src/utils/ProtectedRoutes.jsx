import { useContext, useEffect } from 'react';
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { UserContext } from '../UserContext';

export default function ProtectedRoutes() {
  const {token} = useContext(UserContext);
  
    return token ? <Outlet/> : <Navigate to='/login'/>
}