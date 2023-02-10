import React from "react";
import styles from "./pagination.module.scss";

const Pagination = () => {
  return (
    <section className={styles.pagination}>
      <div className={styles.page100}>
        <h4 className={styles.showing}>Showing</h4>

        <button className={styles.next100button}>
          <h5>10</h5>
          <img src="/images/np-next-down.svg" alt="show next 100" />
        </button>

        <h4 className={styles.outOf100}>out of 100</h4>
      </div>

      <div className={styles.pages}>
        <img
          className={styles.prevBtn}
          src="/images/prev-btn.svg"
          alt="previous page"
        />
        <h4 className={styles.page1}>1</h4>
        <h4 className={styles.page2}>2</h4>
        <h4 className={styles.page3}>3</h4>
        <h4 className={styles.pageHidden}>...</h4>
        <h4 className={styles.page15}>9</h4>
        <h4 className={styles.page16}>10</h4>

        <img
          className={styles.nextBtn}
          src="/images/next-btn.svg"
          alt="next page"
        />
      </div>
    </section>
  );
};

export default Pagination;
