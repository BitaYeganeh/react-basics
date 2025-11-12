import { useNavigate } from "react-router";

const About = () => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/");

    }


    return(
    <div>
    <p>
    About will be here
    </p>
    <button onClick={handleNavigate}>Return to Home</button>
    </div>
    );
};

export default About;