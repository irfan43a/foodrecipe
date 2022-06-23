import React from "react";
import Button from "../../components/base/button/index.js";
import Input from "../../components/base/input/index.js";
import styles from "./register.module.css";
import Link from "next/link.js";
const Register = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.bg}>
          <img src="/assets/hotpot.svg" alt="image" />
        </div>
        <div className={styles.form}>
          <div className={styles.register}>
            <h4>Let`s Get Started !</h4>
            <p>Create new account to access all features</p>
            <form>
              <p>Name</p>
              <Input type="text" className="inputlogin" placeholder="Name" />
              <p>Email address</p>
              <Input type="email" className="inputlogin" placeholder="Enter email address" />
              <p>Create New Password</p>
              <Input type="password" className="inputlogin" placeholder="Create New Password" />
              <p>New Password</p>
              <Input type="password" className="inputlogin" placeholder="New Password" />
              <p>
                <input type="checkbox" /> I agree to terms & conditions
              </p>
              <Button title="Register Account" btn="login" color="yellow" />
            </form>
            <p>
              Already have account?{" "}
              <Link href="login">
                <a>Log in Here</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
