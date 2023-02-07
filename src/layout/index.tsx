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
      <section className={styles.topbar}>
        <Topbar />
      </section>
      <div className={styles.content}>
        <section className={styles.sidebar}>
          <Sidebar />
        </section>
        <section className={styles.body}>{props.children}</section>
      </div>
    </main>
  );
};

export default Layout;
