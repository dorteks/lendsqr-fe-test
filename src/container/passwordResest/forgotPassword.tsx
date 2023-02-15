import React from "react";
import Link from "next/link";
import Button from "@/components/button";
import styles from "./forgotPassword.module.scss";

const ForgotPassword = () => {
  return (
    <section className={styles.container}>
      <div className={styles.keyIcon}>
        <img src="/images/forgot-password.png" alt="forgot-password" />
      </div>
      <div className={styles.forgotPassword}>
        <h1>Forgot Password?</h1>
        <h3>No worries, we&apos;ll send you the reset instructions.</h3>
      </div>
      <div className={styles.buttons}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email  e.g. johndoe@example.com "
        />
        <Link href="/auth/verify-email">
          <Button title={"Reset Password"} />
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

export default ForgotPassword;
