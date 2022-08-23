import React from "react";
import { Link } from "react-router-dom";

const Routespage = () => {
  return (
    <div style={{textAlign:'center',}}>
      <h1>TASKS</h1>
      <ul>
        <li>
          <Link to="/sidenav">sidebar</Link>
        </li>
      </ul>
    </div>
  );
};

export default Routespage;
