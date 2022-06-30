import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
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
        <div className={styles.login}>
          <Image src="/assets/UserPanel.svg" alt="" width={100} height={100} />
        </div>
        <Link href={"/login"}>Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
