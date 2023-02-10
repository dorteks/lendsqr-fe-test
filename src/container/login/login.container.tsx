import React from "react";
import Link from "next/link";
import Input from "@/components/input";
import Button from "@/components/button";
import styles from "./login.module.scss";

const Login = () => {
  // const inputEmail = "admin@lendsqr.com";
  // const inputPassword = "************";

  return (
    <main className={styles.main}>
      <section className={styles.aside}>
        <img
          alt="lendsqr logo"
          src="/images/logo.svg"
          className={styles.logo}
        />
        <img
          alt="#welcome image"
          className={styles.asideImage}
          src="/images/aside-image.svg"
        />
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <h1 className={styles.welcome}>Welcome!</h1>
          <h3 className={styles.details}>Enter details to login.</h3>
          <Input placeholder="Email" value={undefined} />
          <Input placeholder="Password" value={undefined} />
          <Link className={styles.forgotPassword} href="/forgot-password">
            forgot password?
          </Link>
          <Button title="Log in" />
          <Link href="/admin/dashboard">
            <p className={styles.dashboardPage}>Go to dashboard page </p>
          </Link>
          <Link href="/admin/users">
            <p className={styles.userPage}>Go to Users page </p>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Login;
