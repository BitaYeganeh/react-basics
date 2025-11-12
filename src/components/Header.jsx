import { Link } from "react-router";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header} style={{display: "flex"}}>
      <h1>Logo</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;