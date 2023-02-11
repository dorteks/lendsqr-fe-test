import React, { useState } from "react";
import Link from "next/link";
import styles from "./topbar.module.scss";
import SearchBar from "@/components/searchBar";
import Avatar from "@/components/avatar/avatar";
import Sidebar from "../sidebar";
// import Sidebar from "../sidebar";

const Topbar = () => {
  const [display, setDisplay] = useState(false);

  const toggleDisplay = () => {
    setDisplay(!display);
  };

  return (
    <nav className={styles.container}>
      <Link href="/admin/dashboard" className={styles.logo}>
        <img src="/images/logo.svg" alt="logo" />
      </Link>

      <SearchBar placeholder="Search for anything" />
      <div className={styles.searchIconBox}>
        <img
          className={styles.searchIcon}
          alt="search icon"
          src="/images/search-icon.svg"
        />
      </div>

      <div className={styles.actions}>
        <a className={styles.docs}>Docs</a>

        <img
          alt="notification icon"
          src="/images/notification.svg"
          className={styles.notification}
        />
        <Avatar />
      </div>
      <React.Fragment>
        <div onClick={toggleDisplay} className={styles.openMenu}>
          <img src="/images/hamburger.png" />
        </div>

        {display && (
          <div className={styles.menuTopbar}>
            <button className={styles.closeButton} onClick={toggleDisplay}>
              Close
            </button>
            <Sidebar />
          </div>
        )}
      </React.Fragment>
    </nav>
  );
};

export default Topbar;
