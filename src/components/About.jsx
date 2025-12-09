import { useNavigate } from "react-router";
import styles from "./About.module.css";
import CustomKideImage from "./CustomKideImage";
import { React } from "react";
import EmployeeDataGrid from "./EmployeeDataGrid";

const About = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div className={styles.container}>
      <p>About will be here</p>
      <br />
      <div style={{ width: "100%", height: "400px" }}>
        <CustomKideImage />
      </div>
      <button onClick={handleNavigate}>Return to Home</button>
    </div>
  );
};

export default About;
