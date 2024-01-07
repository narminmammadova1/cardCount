import React from 'react'
import styles from "./AllCards.module.css"
import { Card } from '../Card'
import CardsData from "../../Data.json"
export const AllCards = () => {

  return (
    <div className={styles.container}>

{CardsData.map((card,index)=>(

<Card key={index} price={card.price} stock={card.stock} image={card.image}/>

))}

      {/* <Card price={20} stock={10}/> */}
    </div>
  )
}

