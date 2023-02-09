import Pagination from "@/container/pagination";
import Table from "@/container/table/tableData/table";
import Layout from "@/layout";
import React from "react";
import styles from "./dashboard.module.scss";

const Dashboard = () => {
  return (
    <Layout>
      <main className={styles.container}>
        <h1 className={styles.heading}>Dashboard</h1>

        <section className={styles.dashboard}>
          {[
            {
              id: 1,
              icon: "/images/users.svg",
              alt: "users",
              class: "users",
              number: "2,453",
            },
            {
              id: 2,
              icon: "/images/active-users.svg",
              alt: "active users",
              class: "active users",
              number: "2,453",
            },
            {
              id: 3,
              icon: "/images/users-with-loans.svg",
              alt: "users- loans",
              class: "users with loans",
              number: "12,453",
            },
            {
              id: 4,
              icon: "/images/users-with-savings.svg",
              alt: "users- savings",
              class: "users with savings",
              number: "102,453",
            },
          ].map((users) => {
            return (
              <div key={users.id} className={styles.usersTabs}>
                <img
                  className={styles.userIcon}
                  src={users.icon}
                  alt={users.alt}
                />
                <h4 className={styles.userClass}> {users.class}</h4>
                <h1 className={styles.userNumber}>{users.number}</h1>
              </div>
            );
          })}
        </section>

        <Table />

        <Pagination />
      </main>
    </Layout>
  );
};

export default Dashboard;