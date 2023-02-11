import React, { useState } from "react";
import Link from "next/link";
import Input from "@/components/input";
import Button from "@/components/button";
import styles from "./login.module.scss";

const Login = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  console.log(passwordInput);

  const toggleShowPassword = () => {
    console.log("Clicked");
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

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
          <Input
            type="email"
            minLength={"8"}
            required={true}
            maxLength={"50"}
            placeholder="Email"
            onChange={(e: any) => e.target.value}
          />
          <div className={styles.passwordInput}>
            <Input
              type={passwordType}
              value={passwordInput}
              // value="1234567890"
              required={true}
              minLength={"6"}
              maxLength={"30"}
              placeholder="Password"
              onChange={(e: any) => setPasswordInput(e.target.value)}
            />
            <span onClick={toggleShowPassword} className={styles.show}>
              SHOW
            </span>
          </div>

          <Link className={styles.forgotPassword} href="/forgot-password">
            forgot password?
          </Link>
          <Link href={"/admin/dashboard"}>
            <Button title="Log in" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Login;
