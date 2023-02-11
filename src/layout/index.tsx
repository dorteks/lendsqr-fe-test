import React from "react";
import Topbar from "./topbar";
import Sidebar from "./sidebar";
import styles from "./layout.module.scss";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <main className={styles.layout}>
      <Topbar />
      <section className={styles.content}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <section className={styles.body}>{props.children}</section>
      </section>
    </main>
  );
};

export default Layout;
