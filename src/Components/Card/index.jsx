

import styles from './Card.module.css';
import { Buttons } from '../Buttons';
import { useState } from 'react';

export const Card = (props) => {

const [count, setCount] = useState(0); 
const [stock,setStock]=useState(props.stock)
const handleDecrease = () => {
if(count>0 ){

  setCount((prevCount)=>prevCount-1); 
  setStock((prewStock)=>prewStock+1)
} 

};

 const handleIncrease= () => {
  
    if( stock >0 ){
          setCount((prevCount)=>prevCount+1);
          setStock((prewStock)=>prewStock-1)
  
        }   
         };
      
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <img src={props.image} alt="resim" />
       
      </div>
      <h3>Price:${props.price}</h3>
      
      <Buttons handleDecrease={handleDecrease} handleIncrease={handleIncrease} count={count} />

      <h3>Total Price:{props.price*count}</h3>
      <h4>Stock:{stock}</h4>
    </div>
  );
};

