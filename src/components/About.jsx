import { useNavigate } from "react-router";
import styles from "./About.module.css";
import CustomKideImage from "./CustomKideImage";

const About = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <p>About will be here</p>
      <button onClick={handleNavigate}>Return to Home</button>
      <div style={{ width: "100%", height: "500px" }}>
        <CustomKideImage />
      </div>
    </div>
  );
};

export default About;
