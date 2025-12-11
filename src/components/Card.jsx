import { useNavigate } from "react-router";
import PropTypes from "prop-types";
import styles from "./Card.module.css";
import { Button, Typography } from "@mui/material";

const Card = ({
  name = "Example Name",
  title,
  age,
  isFavourite,
  toggleFavourite,
  id,
  handleDelete,
}) => {
  console.log("Card props - ID:", id, "Name:", name);
  //we will pass an isFavourite prop to the Crad component
  // If isFavourite is true, we will add a heart to the card
  // If isFavourite is false ( or undefined, we will not add a heart to the card)
  const navigate = useNavigate();
  return (
    <div className={styles.card}>
      <Button
        variant="contained"
        className={styles.toggleFavourite}
        onClick={() => toggleFavourite(id)}
      >
        Toggle Favourite
      </Button>

      <Button
        variant="contained"
        className={styles.handleDelete}
        onClick={() => handleDelete(id)}
      >
        Delete
      </Button>

      <Typography variant="h6" className={styles.name}>
        {name}
      </Typography>
      <Typography variant="h6" className={styles.title}>
        Title: {title}
      </Typography>
      <Typography variant="h6" className={styles.age}>
        Age: {age}
      </Typography>

      {/*We do not currently have a favourite style in our CSS*/}
      <div className={styles.favourite}>{isFavourite && <span>❤️</span>}</div>
      <Button variant="contained" onClick={() => navigate(`/employees/${id}`)}>
        View Employee
      </Button>
    </div>
  );
};
Card.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isFavourite: PropTypes.bool,
  toggleFavourite: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Card;
