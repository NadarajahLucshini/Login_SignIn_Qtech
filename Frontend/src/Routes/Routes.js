import React, { Suspense } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Lazy loading components
const Home = React.lazy(() => import('../pages/HomePage'));
const Login = React.lazy(() => import('../pages/LoginPage'));
const Reg = React.lazy(() => import('../pages/Reg'));
const Dash = React.lazy(() => import('../pages/DashBoard'))

const MainRoute = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/reg", element: <Reg /> },
    { path: "/dashboard", element: <Dash /> },
];

export default MainRoute;
