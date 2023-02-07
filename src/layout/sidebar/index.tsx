import React from "react";
import styles from "./sidebar.module.scss";

const Sidebar = () => {
  return (
    <nav className={styles.container}>
      {/* top - dashboard section */}
      {[
        {
          id: 1,
          img: "/images/briefcase.svg",
          alt: "organisation",
          text: "Switch Organisation",
          arrow: "/images/arrow-down.svg",
        },
        {
          id: 2,
          img: "/images/home.png",

          text: "Dashboard",
          alt: "dashboard",
        },
      ].map((item) => {
        return (
          <div key={item.id} className={styles.header}>
            <div className={styles.menuButton}>
              <img src={item.img} alt={item.alt} />
            </div>

            <h3 className={styles.text}>{item.text} </h3>

            <img className={styles.arrowDown} src={item.arrow} alt="" />
          </div>
        );
      })}

      {/* middle - section  */}
      <h3 className={styles.heading}>Customers</h3>

      {[
        {
          id: 1,
          text: "Users",
          alt: "users ",
          img: "/images/user-friends.png",
        },
        {
          id: 2,
          text: "Guarantors",
          alt: "guarantors ",
          img: "/images/users-group.png",
        },
        {
          id: 3,
          alt: "loan ",
          text: "Loans",
          img: "/images/sack.png",
        },
        {
          id: 4,
          alt: "decision ",
          text: "Decision Models",
          img: "/images/handshake-regular.png",
        },
        {
          id: 5,
          text: "Savings",
          alt: "piggy bank ",
          img: "/images/piggy-bank.png",
        },
        {
          id: 6,
          alt: "loan ",
          text: "Loan Requests",
          img: "/images/loan-request.png",
        },
        {
          id: 7,
          text: "Whitelist",
          alt: "user check ",
          img: "/images/user-check.png",
        },
        {
          id: 8,
          text: "Karma",
          alt: "user times ",
          img: "/images/user-times.png",
        },
      ].map((item) => {
        return (
          <div key={item.id} className={styles.menu}>
            <div className={styles.menuButton}>
              <img src={item.img} alt={item.alt} />
            </div>

            <h3 className={styles.text}>{item.text} </h3>
          </div>
        );
      })}

      <h3 className={styles.heading}>Businesses</h3>

      {[
        {
          id: 1,
          text: "Organization",
          img: "/images/briefcase.svg",
          alt: "business organization ",
        },
        {
          id: 2,
          text: "Loan Products",
          alt: "loan products ",
          img: "/images/loan-request.png",
        },
        {
          id: 3,
          alt: "savings ",
          text: "Saving Products",
          img: "/images/savings-product.png",
        },
        {
          id: 4,
          text: "Fees and Charges",
          alt: "fees and charges ",
          img: "/images/coins-solid.png",
        },
        {
          id: 5,
          text: "Transactions",
          alt: "transactions ",
          img: "/images/transactions.png",
        },
        {
          id: 6,
          alt: "services",
          text: "Services",
          img: "/images/services.png",
        },
        {
          id: 7,
          alt: "account",
          text: "Service Account",
          img: "/images/user-cog.svg",
        },
        {
          id: 8,
          alt: "settlement",
          text: "Settlements",
          img: "/images/scroll.png",
        },
        {
          id: 9,
          alt: "reports",
          text: "Reports",
          img: "/images/chart-bar.png",
        },
      ].map((item) => {
        return (
          <div key={item.id} className={styles.menu}>
            <div className={styles.menuButton}>
              <img src={item.img} alt={item.alt} />
            </div>

            <h3 className={styles.text}>{item.text} </h3>
          </div>
        );
      })}

      <h3 className={styles.heading}>settings</h3>

      {[
        {
          id: 1,
          text: "Preferences",
          alt: "preferences icon",
          img: "/images/sliders-preference.svg",
        },
        {
          id: 2,
          alt: "fees and pricing icon",
          img: "/images/badge-percent.svg",
          text: "Fees and Pricing Products",
        },
        {
          id: 3,
          text: "Audit Logs ",
          alt: "audit logs icon",
          img: "/images/clipboard-list.svg",
        },
      ].map((item) => {
        return (
          <div key={item.id} className={styles.menu}>
            <div className={styles.menuButton}>
              <img src={item.img} alt={item.alt} />
            </div>

            <h3 className={styles.text}>{item.text} </h3>
          </div>
        );
      })}

      {/* logout - buttom section */}
      <hr className={styles.divider} />

      <div className={styles.logout}>
        <img alt="signout" className={styles.icon} src="/images/sign-out.png" />
        <h3 className={styles.text}>Logout</h3>
      </div>

      <h3 className={styles.footer}>v1.2.0</h3>
    </nav>
  );
};

export default Sidebar;