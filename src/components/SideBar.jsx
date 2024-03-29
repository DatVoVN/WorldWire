import React from "react";
import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import AppLayout from "../pages/AppLayout";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";
const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &Copy; Copyright {new Date().getFullYear()} by WorldWire Inc.
        </p>
      </footer>
    </div>
  );
};

export default SideBar;
