import React from "react";
import PropTypes from "prop-types";
import AppHeader from "./common/header/AppHeader";
import SideNav from "./common/sidenav/SideNav";

export const Layout = props => {
  return (
    <>
      <AppHeader />
      <div className="main-wrapper">
        <SideNav />
        <div className="content">{props.children}</div>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};
