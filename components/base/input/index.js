import styles from "./input.module.css";

const Input = ({ type, className, placeholder, value, onChange, onClick, id }) => {
  return <input type={type} className={styles[className]} placeholder={placeholder} value={value} onChange={onChange} onClick={onClick} id={id} />;
};

export default Input;
