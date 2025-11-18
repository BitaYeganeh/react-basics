import { useNavigate } from "react-router";
import styles from "./About.module.css";

const About = () => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/");

    }


    return(
    <div className={styles.container}>
    <p>About will be here</p>
    <button onClick={handleNavigate}>Return to Home</button>
    </div>
    );
};

export default About;