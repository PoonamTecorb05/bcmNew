
import './App.css';
import React from 'react'
import Routing from './Router/routing';
import { useLocation } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
// import CompanyDashboard from './pages/BcmManager/DesignMode/CompanyDashboard';

function App() {
  // const location = useLocation();
  // console.log(location.pathname);
  // return <span>Path : {location.pathname}</span>
  return (
    <>
   <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </>
  );
}

export default App;
