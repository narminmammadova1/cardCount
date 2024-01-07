import styles from "./Buttons.module.css"
export const Buttons = (props) => {

   

  return (
    <div className={styles.buttons}>
      <button onClick={props.handleDecrease} className={styles.btn}>-</button>
      <p className={styles.btnTitle}>{props.count}</p>
      <button onClick={props.handleIncrease} className={styles.btn}>+</button>

    </div>
  )
}

