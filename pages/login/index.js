import Link from "next/link.js";
import React, { useState } from "react";
import Button from "../../components/base/button/index.js";
import Input from "../../components/base/input/index.js";
import styles from "./login.module.css";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
const Login = () => {
  const router = useRouter();
  const [form, setform] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogin = () => {
    // e.preventDefault();
    axios
      .post("http://localhost:4000/v1/auth/login", form, { withCredentials: true })
      .then(() => {
        alert("login succcess");
        router.push("/");
      })
      .catch(() => {
        alert("login gagal");
      });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.bg}>
          <Image src="/assets/hotpot.svg" alt="image" width={182} height={224} />
        </div>
        <div className={styles.form}>
          <div className={styles.login}>
            <h4>Welcome</h4>
            <p>log in into your exiting account</p>
            {/* <form onSubmit={handleLogin}> */}
            <p>E-mail</p>
            <Input type="text" name="email" className="inputlogin" placeholder="example@gmail.com" value={form.email} onChange={handleChange} />
            {/* <input type="text" name="email" className="inputlogin" placeholder="example@gmail.com" value={form.email} onChange={handleChange} /> */}
            <p>Password</p>
            <Input type="password" name="password" className="inputlogin" placeholder="Password" value={form.password} onChange={handleChange} />
            {/* <input type="password" name="password" className="inputlogin" placeholder="Password" value={form.password} onChange={handleChange} /> */}
            <p>
              <input type="checkbox" /> I agree to terms & conditions
            </p>
            {/* <Button title="Login" btn="login" color="yellow" /> */}
            <button onClick={handleLogin} className={styles.btn}>
              Login
            </button>
            {/* </form> */}
            <p>Forgot Password ?</p>
            <p>
              Don’t have an account?
              <Link href="/register">
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
