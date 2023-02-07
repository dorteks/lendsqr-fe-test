import React from "react";
import styles from "./edit-table.module.scss";

const EditTable = () => {
  return (
    <section className={styles.container}>
      <div className={styles.organisation}>
        <h3>Organisation</h3>
        <select className={styles.select}>
          <option>Select</option>
          <option>ASDF</option>
          <option>DUYUS</option>
          <option>LOSH</option>
        </select>
      </div>
      <div className={styles.userName}>
        <h3>Username</h3>
        <input className={styles.input} placeholder="User" />
      </div>
      <div className={styles.email}>
        <h3>Email</h3>
        <input className={styles.input} placeholder="Email" />
      </div>

      <div className={styles.date}>
        <h3>Date</h3>
        <input className={styles.input} placeholder="Date" />
      </div>

      <div className={styles.phoneNumber}>
        <h3>Phone Number</h3>
        <input className={styles.input} placeholder="Phone Number" />
      </div>

      <div className={styles.status}>
        <h3>Status</h3>
        <select className={styles.select}>
          <option>Select</option>
          <option>Iactive</option>
          <option>Active</option>
          <option>Blacklisted</option>
        </select>
      </div>

      <section className={styles.button}>
        <button className={styles.reset}>Reset</button>
        <button className={styles.filter}>Filter</button>
      </section>
    </section>
  );
};

export default EditTable;
