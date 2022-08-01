import React from "react";
import Button from "../../components/base/button/index.js";
import Input from "../../components/base/input/index.js";
import styles from "./register.module.css";
import Link from "next/link.js";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
const Register = () => {
  const router = useRouter();
  const [formRegister, setformRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setformRegister({
      ...formRegister,
      [e.target.name]: e.target.value,
    });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.api_recipefood}/v1/auth/register`, formRegister)
      .then(() => {
        alert("register succcess");
        router.push("/login");
      })
      .catch((e) => {
        // console.log(e.response.data.message);
        alert(e.response.data.message);
      });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.bg}>
          <Image src="/assets/hotpot.svg" alt="image" width={182} height={224} />
        </div>
        <div className={styles.form}>
          <div className={styles.register}>
            <h4>Let`s Get Started !</h4>
            <p>Create new account to access all features</p>
            <form onSubmit={handleRegister}>
              <p>Name</p>
              {/* <Input type="text" className="inputlogin" placeholder="Name" /> */}
              <Input type="text" name="name" className="inputlogin" placeholder="Name" value={formRegister.name} onChange={handleChange} />
              <p>Email address</p>
              {/* <Input type="email" className="inputlogin" placeholder="Enter email address" /> */}
              <Input type="email" name="email" className="inputlogin" placeholder="Enter email address" value={formRegister.email} onChange={handleChange} />
              <p>Create New Password</p>
              {/* <Input type="password" className="inputlogin" placeholder="Create New Password" /> */}
              <Input type="password" name="password" className="inputlogin" placeholder="Create New Password" value={formRegister.password} onChange={handleChange} />
              <p>New Password</p>
              {/* <Input type="password" className="inputlogin" placeholder="New Password" /> */}
              <Input type="password" name="repassword" className="inputlogin" placeholder="New Password" />
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
