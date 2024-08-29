import { useEffect } from 'react';
import { Outlet, Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoutes() {
  const user = true; // Burada gerçek kullanıcı kontrolü yapılmalı
  const location = useLocation();

  useEffect(() => {
    console.log('Current URL:', location.pathname);
  }, [location]);

  if (user && location.pathname === '/login') {
    return <Navigate to="/" replace />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
