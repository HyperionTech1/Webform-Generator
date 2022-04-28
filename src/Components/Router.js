import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ResponsiveAppBar from './Layout/Header';
import Home from './Pages/Home';
import New from './Pages/New';
import Account from './Pages/Account';
import { Route, Routes } from "react-router";
  
 
  
function Router() {
return (
    <div className = "Router">
    <ResponsiveAppBar />
    <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "New" element = {<New />} />
    </Routes>
    </div>
);
}

export default Router;