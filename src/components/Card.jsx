import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.name}>{props.name}</div>
      <div className={styles.title}>Title: {props.title}</div>
      <div className={styles.age}>Age: {props.age}</div>
    </div>
  );
};

export default Card;