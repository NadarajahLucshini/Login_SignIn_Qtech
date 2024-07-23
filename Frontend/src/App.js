import React, { Suspense } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom'; // Import useRoutes
import MainRoute from './Routes/Routes'; // Import MainRoute
import '@fortawesome/fontawesome-free/css/all.min.css';

function RoutesWrapper() {
  const routes = useRoutes(MainRoute); // useRoutes should be defined here
  return <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>;
}

function App() {
  return (
    <BrowserRouter>
      <RoutesWrapper />
    </BrowserRouter>
  );
}

export default App;
