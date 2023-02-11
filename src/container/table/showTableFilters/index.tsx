import React, { useState } from "react";
import styles from "./filter-table.module.scss";

const FilterTable = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <div onClick={toggleModal} className={styles.buttonModal}>
        <img alt="view user" src="/images/view-user.svg" />
        <h4>View Details</h4>
      </div>

      {modal && (
        <section className={styles.modal}>
          <div onClick={toggleModal} className={styles.overlay}></div>
          <div className={styles.modalContent}>
            <div className={styles.container}>
              <div className={styles.organisation}>
                <h3>Organisation</h3>
                <select className={styles.select}>
                  <option>Lendsqr</option>
                  <option>Lendsqr</option>
                  <option>Lendsqr</option>
                  <option>Lendsqr</option>
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
                <input
                  type="date"
                  className={styles.input}
                  placeholder="Date"
                />
              </div>

              <div className={styles.phoneNumber}>
                <h3>Phone Number</h3>
                <input className={styles.input} placeholder="Phone Number" />
              </div>

              <div className={styles.status}>
                <h3>Status</h3>
                <select className={styles.select}>
                  <option>Inactive</option>
                  <option>Active</option>
                  <option>Pending</option>
                  <option>Blacklisted</option>
                </select>
              </div>

              <section className={styles.button}>
                <button className={styles.reset}>Reset</button>
                <button className={styles.filter}>Filter</button>
              </section>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default FilterTable;
