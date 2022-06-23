import Link from "next/link.js";
import React from "react";
import Button from "../../components/base/button/index.js";
import Input from "../../components/base/input/index.js";
import styles from "./login.module.css";
const Login = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.bg}>
          <img src="/assets/hotpot.svg" alt="image" />
        </div>
        <div className={styles.form}>
          <div className={styles.login}>
            <h4>Welcome</h4>
            <p>log in into your exiting account</p>
            <form>
              <p>E-mail</p>
              <Input type="text" className="inputlogin" placeholder="example@gmail.com" />
              <p>Password</p>
              <Input type="password" className="inputlogin" placeholder="Password" />
              <p>
                <input type="checkbox" /> I agree to terms & conditions
              </p>
              <Button title="Login" btn="login" color="yellow" />
            </form>
            <p>Forgot Password ?</p>
            <p>
              Don’t have an account?{" "}
              <Link href="register">
                <a>Sign Up</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
