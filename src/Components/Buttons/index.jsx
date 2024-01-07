import styles from "./Buttons.module.css"
export const Buttons = (props) => {

   

  return (
    <div className={styles.buttons}>
      <button disabled={props.disabled2}  onClick={props.handleDecrease} className={styles.btn}>-</button>
      <p className={styles.btnTitle}>{props.count}</p>
      <button disabled={props.disabled}  onClick={props.handleIncrease} className={styles.btn}>+</button>

    </div>
  )
}

