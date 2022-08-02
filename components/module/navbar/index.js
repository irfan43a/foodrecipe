import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isLogin, setLogin] = useState(false);
  useEffect(() => {
    const localData = localStorage.getItem("token");
    if (localData) {
      setLogin(true);
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    setLogin(false);
  };
  return (
    <nav className={styles.navbar}>
      {isLogin ? (
        <>
          <ul className={styles.links}>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/addrecipe">
                <a>Add Recipe</a>
              </Link>
            </li>
            <li>
              <Link href="/profile">
                <a>Profile</a>
              </Link>
            </li>
          </ul>
          <div className={styles.link}>
            <div className={styles.logout}>
              <Image src="/assets/UserPanel.svg" alt="" width={100} height={100} />
            </div>
            <button className={styles.btnlogout} onClick={handleLogout}>
              Logout
            </button>
          </div>
        </>
      ) : (
        <>
          <ul className={styles.links}>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
          </ul>
          <div className={styles.linklogin}>
            <div className={styles.logout}>
              <Image src="/assets/UserPanel.svg" alt="" width={100} height={100} />
            </div>
            <Link href={"/login"}>Login</Link>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
