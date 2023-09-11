import React from 'react';
import Header from '../Shared/Header';
import { Outlet } from 'react-router-dom';

const DashBoardLayOut = () => {
    return (
        <div className="drawer">
  <input id="dashBoard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
<Outlet></Outlet>
    <label htmlFor="dashBoard-drawer" className="btn btn-primary drawer-button">Open drawer</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashBoard-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
  </div>
</div>
    );
};

export default DashBoardLayOut;