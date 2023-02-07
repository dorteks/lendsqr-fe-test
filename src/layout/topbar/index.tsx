import React from "react";
import styles from "./topbar.module.scss";
import SearchButton from "@/components/searchButton";
import Link from "next/link";

const Topbar = () => {
  return (
    <main className={styles.container}>
      <div className={styles.openMenu}>
        <img src="/images/hamburger.png" />
      </div>

      <Link href="/dashboard" className={styles.logo}>
        <img src="/images/logo.svg" alt="logo" />
      </Link>

      <SearchButton placeholder="Search for anything" />

      <h5 className={styles.docs}>Docs</h5>

      <img
        alt="notification icon"
        src="/images/notification.svg"
        className={styles.notification}
      />

      <div></div>
      <img
        alt="user profile picture"
        src="/images/user-avatar.svg"
        className={styles.userAvatar}
      />

      <h5 className={styles.userName}>Ayodele</h5>

      <img
        alt="dropdown menu icon"
        src="/images/arrow-down.svg"
        className={styles.arrowDown}
      />
    </main>
  );
};

export default Topbar;
