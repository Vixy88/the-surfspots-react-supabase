import React from "react";
import { Outlet } from "react-router-dom";
import DesktopHeader from "../common/header/DesktopHeader";

// ! The Outlet component tells React Router where to render the child route components!!!

const Layout = () => {
  return (
    <>
      <main>
        <DesktopHeader />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
