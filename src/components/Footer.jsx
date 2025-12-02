import { Button, Typography } from "@mui/material";
import styles from "./Footer.module.css";

const Footer = ({ count, setCount }) => {
  return (
    <footer className={styles.footer}>
      <Typography variant="body1">Copyrights</Typography>
      <div
        className="footerCounterNumber"
        style={{ color: count > 0 ? "GREEN" : "RED" }}
      >
        {count}
      </div>
      <Button
        className="footerCounterButton"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </Button>
    </footer>
  );
};

export default Footer;
