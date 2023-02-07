import React from "react";
import Link from "next/link";
import Input from "@/components/input";
import Button from "@/components/button";
import styles from "./login.module.scss";

const Login = () => {
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
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Link className={styles.forgotPassword} href="/forgot-password">
            forgot password?
          </Link>
          <Button title="Log in"></Button>
        </div>
      </section>
    </main>
  );
};

export default Login;
