import Link from "next/link";
import Input from "@/components/input";
import React, { useState } from "react";
import Button from "@/components/button";
import styles from "./signup.module.scss";

const Signup = () => {
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
        <img
          alt="lendsqr logo"
          src="/images/logo.svg"
          className={styles.logoMain}
        />
        <div className={styles.container}>
          <h1 className={styles.register}>Register</h1>
          <h3 className={styles.details}>
            Create an account by entering your details here.
          </h3>
          <Input
            type="text"
            minLength={"8"}
            required={true}
            maxLength={"50"}
            placeholder="Full Name"
            onChange={(e: any) => e.target.value}
          />
          <Input
            type="email"
            minLength={"8"}
            required={true}
            maxLength={"50"}
            placeholder="Email"
            onChange={(e: any) => e.target.value}
          />
          <Input
            type="text"
            minLength={"8"}
            required={true}
            maxLength={"50"}
            placeholder="Phone"
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

          <div className={styles.termsAndCondition}>
            <h4>
              By continuing, you agree to Lendsqr&apos;s{" "}
              <a>Business Terms and Service</a> and acknowledge that you&apos;ve
              read our <a>Privacy Policy</a> .
            </h4>
          </div>

          <Link href={"/admin/users"}>
            <Button title="Sign up" />
          </Link>

          <div className={styles.login}>
            <h4>
              Already have an account yet? <Link href="/">Log in!</Link>
            </h4>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Signup;
