import styles from "./input.module.css";

const Input = ({ type, className, placeholder, name, value, onChange }) => {
  return <input type={type} name={name} className={styles[className]} placeholder={placeholder} value={value} onChange={onChange} />;
};

export default Input;
