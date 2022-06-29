import styles from "./input.module.css";

const Input = ({ type, className, placeholder }) => {
  return <input type={type} className={styles[className]} placeholder={placeholder} />;
};

export default Input;
