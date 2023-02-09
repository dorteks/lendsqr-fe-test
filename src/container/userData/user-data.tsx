import React from "react";
import Link from "next/link";
import styles from "./user-data.module.scss";

const UserData = () => {
  return (
    <div className={styles.container}>
      <Link href="/dashboard" className={styles.backArrow}>
        <img src="/images/np-back-arrow.svg" alt="back to users" />
        <h4>Back to Users</h4>
      </Link>

      <section className={styles.userActions}>
        <h3>User Details</h3>

        <div className={styles.buttonGroup}>
          <button className={styles.blacklist}>BLACKLIST USER</button>
          <button className={styles.activate}>ACTIVATE USER</button>
        </div>
      </section>

      <section className={styles.userDetails}>
        <div className={styles.div}>
          <img
            alt="user profile pics"
            className={styles.userAvatar}
            src="/images/dashboard-user-avatar.svg"
          />

          <div className={styles.userName}>
            <h3>Grace Effiom</h3>
            <h4>LSQFf587g90</h4>
          </div>

          <img
            alt="divider"
            className={styles.divider}
            src="/images/line-divider.svg"
          />

          <div className={styles.userTier}>
            <h4>User&apos;s Tier</h4>
            <div className={styles.stars}>
              <img src="/images/np-star-filled.svg" alt="filled star" />
              <img src="/images/np-star-not-filled.svg" alt="empty star" />
              <img src="/images/np-star-not-filled.svg" alt="empty star" />
            </div>
          </div>

          <img
            alt="divider"
            className={styles.divider}
            src="/images/line-divider.svg"
          />

          <div className={styles.bankDetails}>
            <h3>#200,000.00</h3>
            <h4>9912345678 / Providus Bank</h4>
          </div>
        </div>

        <div className={styles.userInfoTabs}>
          <h4>General Details</h4>
          <h4>Documents</h4>
          <h4>Bank Details</h4>
          <h4>Loans</h4>
          <h4>Savings</h4>
          <h4>App and System</h4>
        </div>
      </section>

      <section className={styles.generalDetails}>
        <h4>Personal Information</h4>
        <section className={styles.info}>
          {[
            { id: 1, title: "full name", value: "Grace Effiong" },
            { id: 2, title: "phone number", value: "07089898989" },
            { id: 3, title: "email address", value: "grace@gmail.com" },
            { id: 4, title: "full name", value: "Grace Effiong" },
            { id: 5, title: "full name", value: "Grace Effiong" },
            { id: 6, title: "full name", value: "Grace Effiong" },
            { id: 7, title: "full name", value: "Grace Effiong" },
            { id: 8, title: "full name", value: "Grace Effiong" },
          ].map((info) => {
            return (
              <div key={info.id}>
                <h5>{info.title}</h5>
                <h3>{info.value}</h3>
              </div>
            );
          })}
        </section>
        <img
          alt="divider"
          src="/images/divider.svg"
          className={styles.dividerH}
        />

        <h4>Education and Employment</h4>
        <section className={styles.info}>
          {[
            { id: 9, title: "level of education", value: "B.Sc" },
            { id: 10, title: "employment status", value: "Employed" },
            { id: 11, title: "sector of employment", value: "FinTech" },
            { id: 12, title: "duration of employment", value: "2 years" },
            { id: 13, title: "office email", value: "grace@lendsqr" },
            {
              id: 14,
              title: "monthly income ",
              value: "#200,000.00- #400,000.00",
            },
            { id: 15, title: "loan repayment ", value: "40,000" },
          ].map((info) => {
            return (
              <div key={info.id}>
                <h5>{info.title}</h5>
                <h3>{info.value}</h3>
              </div>
            );
          })}
        </section>
        <img
          alt="divider"
          src="/images/divider.svg"
          className={styles.dividerH}
        />

        <h4>Socials</h4>
        <section className={styles.info}>
          {[
            { id: 17, title: "full name", value: "Grace Effiong" },
            { id: 18, title: "full name", value: "Grace Effiong" },
            { id: 19, title: "full name", value: "Grace Effiong" },
          ].map((info) => {
            return (
              <div key={info.id}>
                <h5>{info.title}</h5>
                <h3>{info.value}</h3>
              </div>
            );
          })}
        </section>
        <img
          alt="divider"
          src="/images/divider.svg"
          className={styles.dividerH}
        />

        <h4>Guarantor</h4>
        <section className={styles.info}>
          {[
            { id: 20, title: "full name", value: "Grace Effiong" },
            { id: 21, title: "full name", value: "Grace Effiong" },
            { id: 22, title: "full name", value: "Grace Effiong" },
            { id: 23, title: "full name", value: "Grace Effiong" },
          ].map((info) => {
            return (
              <div key={info.id}>
                <h5>{info.title}</h5>
                <h3>{info.value}</h3>
              </div>
            );
          })}
        </section>
        <img
          alt="divider"
          src="/images/divider.svg"
          className={styles.dividerH}
        />

        <section className={styles.info}>
          {[
            { id: 24, title: "full name", value: "Grace Effiong" },
            { id: 25, title: "full name", value: "Grace Effiong" },
            { id: 26, title: "full name", value: "Grace Effiong" },
            { id: 27, title: "full name", value: "Grace Effiong" },
          ].map((info) => {
            return (
              <div key={info.id}>
                <h5>{info.title}</h5>
                <h3>{info.value}</h3>
                <h6 className={styles.empty}></h6>
              </div>
            );
          })}
        </section>
      </section>
    </div>
  );
};

export default UserData;
