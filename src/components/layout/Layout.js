import React from "react";

// CSS
import "./Layout.css";

// Components
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <div className="layout-component">
      <MainNavigation />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
