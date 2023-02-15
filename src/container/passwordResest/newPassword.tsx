import React from "react";
import Button from "@/components/button";
import styles from "./newPassword.module.scss";
import Link from "next/link";

const NewPassword = () => {
  return (
    <section className={styles.container}>
      <div className={styles.keyIcon}>
        <img src="/images/forgot-password.png" alt="forgot-password" />
      </div>
      <div className={styles.forgotPassword}>
        <h1>Set new password</h1>
        <h3>
          Your new password must be different to previously used passwords.
        </h3>
      </div>
      <div className={styles.buttons}>
        <label>Password</label>
        <input className={styles.passwordInput} placeholder="Password" />
        <h4>Must be at least 8 characters</h4>
        <label>Confirm password</label>
        <input placeholder="Confirm password" />
        <Link href="/auth/reset-successful">
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

export default NewPassword;
