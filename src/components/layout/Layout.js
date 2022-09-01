import React from "react";

// CSS
import "./Layout.css";

// Components
import MainNavigation from "./MainNavigation";
import DashboardHeader from "./DashboardHeader";

const Layout = (props) => {
  return (
    <div className="layout-component">
      <div className="main-navigation-container">
        <MainNavigation />
      </div>
      <header className="dashboard-header">
        <DashboardHeader />
      </header>
      <main className="dashboard-page-container">{props.children}</main>
    </div>
  );
};

export default Layout;
