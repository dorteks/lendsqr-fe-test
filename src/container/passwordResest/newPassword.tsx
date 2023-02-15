import Link from "next/link";
import React, { useState } from "react";
import Button from "@/components/button";
import styles from "./newPassword.module.scss";

const NewPassword = () => {
  const [typePassword, setTypePassword] = useState("password");
  const toggleTypePassword = () => {
    if (typePassword === "password") {
      setTypePassword("text");
      return;
    }
    setTypePassword("password");
  };

  const [typeConfirmPassword, setTypeConfirmPassword] = useState("password");
  const toggleTypeConfirmPassword = () => {
    if (typeConfirmPassword === "password") {
      setTypeConfirmPassword("text");
      return;
    }
    setTypeConfirmPassword("password");
  };

  const [inputPassword, setInputPassword] = useState("");
  const [inputConfirmPassword, setInputConfirmPassword] = useState("");

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
        <div className={styles.passwordGroup}>
          <input
            type={typePassword}
            value={inputPassword}
            placeholder="Password"
            className={styles.passwordInput}
            onChange={(e: any) => setInputPassword(e.target.value)}
          />
          <h3 onClick={toggleTypePassword} className={styles.show}>
            SHOW
          </h3>
        </div>

        <h4>Must be at least 8 characters</h4>

        <label>Confirm password</label>
        <div className={styles.confirmPasswordGroup}>
          <input
            type={typeConfirmPassword}
            value={inputConfirmPassword}
            placeholder="Confirm password"
            onChange={(e: any) => setInputConfirmPassword(e.target.value)}
          />
          <h3 className={styles.show} onClick={toggleTypeConfirmPassword}>
            SHOW
          </h3>
        </div>
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
