"use client";
import React, { useState } from 'react';

type Props = {};

export default function Compteur({}: Props) {
  const [count, setCount] = useState(0);
  const [nom, setNom] = useState("Evan");

  const handleClick = () => {
    setCount(count + 1);
    console.log("Valeur du compteur : ", count+1);
  };

    const handleClick2 = () => {
        setCount(count - 1);
        console.log("Valeur du compteur : ", count-1);
    };

  return (
    <div style={{display: 'flex', gap: 25, padding: 20, background: "lightblue", marginBottom: 10 }}>
      <h2>Nombre de fois : {count}</h2>
      <button onClick={handleClick}>Incrémenter</button>
      <button onClick={handleClick2}>Décrementer</button>
    </div>
  );
}