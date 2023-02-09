import React from "react";
import styles from "./topbar.module.scss";
import Link from "next/link";
import Avatar from "@/components/avatar/avatar";
import SearchBar from "@/components/searchBar";

const Topbar = () => {
  return (
    <nav className={styles.container}>
      <Link href="/admin/users" className={styles.logo}>
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

      <div className={styles.openMenu}>
        <img src="/images/hamburger.png" />
      </div>
    </nav>
  );
};

export default Topbar;
