import React from "react";
import './side.css';
import "bootstrap/dist/css/bootstrap.min.css";


const Notification = () => {
  return (
    <div className='content'>
      <h1>Notification</h1>
      <br />
      <button type="button" className="btn btn-primary">
        Notifications <span className="badge bg-secondary">12</span>
      </button>
    </div>
  );
};

export default Notification;
