import React from "react";
import Link from "next/link";
import Button from "@/components/button";
import styles from "./resetSuccessful.module.scss";

const ResetPasswordSuccessful = () => {
  return (
    <section className={styles.container}>
      <div className={styles.keyIcon}>
        <img
          src="/images/reset-password-successful.jpeg"
          alt="forgot-password"
        />
      </div>
      <div className={styles.forgotPassword}>
        <h1>Password Reset</h1>
        <h3>Your password has been successfully reset</h3>
        <h3>Click below to log in magically</h3>
      </div>
      <div className={styles.buttons}>
        <Link href="/admin/dashboard">
          <Button title={"Continue"} />
        </Link>
      </div>

      <div>
        <Link href="/" className={styles.backButton}>
          <img src="/images/np-back-arrow.svg" alt="back to users" />
          <h3>Back to Log in</h3>
        </Link>
      </div>
    </section>
  );
};

export default ResetPasswordSuccessful;
