import styles from "./Card.module.css";

const Card = ({
  name, title, age, isFavourite, toggleFavourite, id, handleDelete
              }) => {

  //we will pass an isFavourite prop to the Crad component
  // If isFavourite is true, we will add a heart to the card
  // If isFavourite is false ( or undefined, we will not add a heart to the card)
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


    
    </div>
  );
};

export default Card;