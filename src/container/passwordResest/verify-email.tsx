import React from "react";
import Button from "@/components/button";
import styles from "./verify.module.scss";
import Link from "next/link";

const Verify = () => {
  return (
    <section className={styles.container}>
      <div className={styles.keyIcon}>
        <img src="/images/email.png" alt="forgot-password" />
      </div>
      <div className={styles.forgotPassword}>
        <h1>Check your email</h1>
        <h3>We sent a password reset link to johndoe@example.com</h3>
      </div>
      <div className={styles.buttons}>
        <Button title={"Open email app"} />
      </div>

      <div className={styles.resendLink}>
        <h3>
          Didn&apos;t receive the email? <Link href="/">Click to resend</Link>{" "}
        </h3>

        <Link href="/auth/set-new-password">
          <h4>Click here to continue</h4>
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

export default Verify;
