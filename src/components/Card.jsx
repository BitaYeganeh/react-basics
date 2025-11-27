import { useNavigate } from "react-router";
import PropTypes from "prop-types";
import styles from "./Card.module.css";

const Card = ({
  name = "Example Name", title, age, isFavourite, toggleFavourite, id, handleDelete
              }) => {
                console.log("Card props - ID:", id, "Name:", name);
  //we will pass an isFavourite prop to the Crad component
  // If isFavourite is true, we will add a heart to the card
  // If isFavourite is false ( or undefined, we will not add a heart to the card)
  const navigate = useNavigate(); 
  return (
    <div className={styles.card}>
    <button className={styles.toggleFavourite}
    onClick={()=> toggleFavourite(id)}>Toggle Favourite</button>

    <button className={styles.handleDelete}
    onClick={()=> handleDelete(id)}>Delete</button>

      <div className={styles.name}>{name}</div>
      <div className={styles.title}>Title: {title}</div>
      <div className={styles.age}>Age: {age}</div>

      {/*We do not currently have a favourite style in our CSS*/}
      <div className={styles.favourite}>{isFavourite && <span>❤️</span>}</div>
      <button onClick={() => navigate(`/employees/${id}`)}>
        View Employee
      </button>
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