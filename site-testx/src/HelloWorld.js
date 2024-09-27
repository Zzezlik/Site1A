// src/HelloWorld.js
import React, { useState } from 'react';

function HelloWorld() {
  

  localStorage.getItem("Coin") ?? localStorage.setItem("Coin", 0)
  let [count, setCount, coin] = useState(0);
  count = Number(localStorage.getItem('Coin'))
  coin = Number(localStorage.getItem('Coins'))

  let [text, setText] = useState(`${count} Coins`)

  return (<div>
    <h1>{count} Гомяк Коинс</h1>
    <button className="hamsterC" onClick={() => {
      
      
      localStorage.setItem('Coin', count + 1)

      setCount(count = Number(localStorage.getItem('Coin')))
      
      }}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHmMLHM2B2sk_huAtjNYr2VuMdIZNmKS9_Kg&s" alt="hamster"></img></button>

  </div>);
}

export default HelloWorld;
