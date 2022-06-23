import styles from "./Button.module.css";

const Button = ({ title, btn, color, onClick, type }) => {
  return (
    <button className={`${styles[btn]} ${styles[color]}`} onClick={onClick} type={type}>
      {title}
    </button>
  );
};

export default Button;
