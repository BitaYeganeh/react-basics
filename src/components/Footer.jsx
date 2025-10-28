import styles from "./Footer.module.css";

const Footer = ({count, setCount}) => {
  return (
    <footer className={styles.footer}>
      <p>Copyrights</p>
      <div style={{color: count > 0 ? "GREEN" : "RED" }}>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </footer>
  );
};

export default Footer;