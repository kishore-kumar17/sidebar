import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Customcomponent from "./components/custom component/Customcomponent";
import Navnestfour from "./components/sidebar-nest/Navnestfour";
import Navnestone from "./components/sidebar-nest/Navnestone";
import Navnestthree from "./components/sidebar-nest/Navnestthree";
import Navnesttwo from "./components/sidebar-nest/Navnesttwo";
import About from "./components/sidebar-pages/About";
import Dashboard from "./components/sidebar-pages/Dashboard";
import Logout from "./components/sidebar-pages/Logout";
import Notification from "./components/sidebar-pages/Notification";
import Sidenavigation from "./components/sidebar/Sidenavigation";
import Subnavnestfour from "./components/sub-sidebar-nest/Subnavnestfour";
import Subnavnestone from "./components/sub-sidebar-nest/Subnavnestone";
import Subnavnestthree from "./components/sub-sidebar-nest/Subnavnestthree";
import Subnavnesttwo from "./components/sub-sidebar-nest/Subnavnesttwo";
import Routespage from "./Router/Routespage";

function App() {
  return (
    <div className="App">
     <Sidenavigation />
        <Routes>
          <Route path="/" element={<Sidenavigation />}></Route>
          <Route path="/a" element={<Routespage />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/notification" element={<Notification />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/nest1" element={<Navnestone />}></Route>
          <Route path="/nest2" element={<Navnesttwo />}></Route>
          <Route path="/nest3" element={<Navnestthree />}></Route>
          <Route path="/nest4" element={<Navnestfour />}></Route>
          <Route path="/nest41" element={<Subnavnestone />}></Route>
          <Route path="/nest42" element={<Subnavnesttwo />}></Route>
          <Route path="/nest43" element={<Subnavnestthree />}></Route>
          <Route path="/nest44" element={<Subnavnestfour />}></Route>
          <Route path="/cc" element={<Customcomponent />}></Route>





        </Routes>
    </div>
  );
}

export default App;
