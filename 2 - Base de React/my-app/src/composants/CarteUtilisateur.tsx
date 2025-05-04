import React from 'react'

type Props = {
    utilisateurs: {
        id: number;
        name: string;
        age: number;
    };
};

export default function CarteUtilisateur({utilisateurs}: Props) {
  return (
    <div style={{padding:4 , background:"red", marginBottom:10}}>
        <p>{utilisateurs.name} - {utilisateurs.age} ans</p>
    </div>
  )
}