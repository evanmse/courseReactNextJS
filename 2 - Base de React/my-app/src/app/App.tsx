'use client'
import React, { useEffect, useState } from 'react';
import CarteUtilisateur from "@/composants/CarteUtilisateur";
import Compteur from "@/composants/Compteur";
import Salutation from "@/composants/Salutations";

const App = () => {
    const utilisateurs = [
        { id: 1, name: "Evan", age: 20 },
        { id: 2, name: "Marie", age: 25 },
        { id: 3, name: "Paul", age: 30 },
    ]

    const [compteur, setCompteur] = useState(0);
    const [posts, setPosts] = useState();

    useEffect(() => {
        document.title = `Le compteur est à ${compteur}`;
    }, [compteur])

    return (
        <div>
            <h1>Welcome to My App Salutation</h1>
                <Salutation name="Evan" age={20} />
                <Salutation name="Marie" />
                <Salutation name="Paul" />

                <h3>Les evenements en react</h3>
                <Compteur />

                <Compteur />

                <p>Affichage de la liste des utilisateurs</p>
                {/* element key important pour différencier les éléments dans la liste */}
                {utilisateurs.map(p => (
                    <CarteUtilisateur utilisateurs={p} key={p.id} />
                ))}


                <h2>Les effets en react</h2>
                <p>Mise à jour du nom du documents</p>
                <div>
                    <button onClick={()=>setCompteur(compteur+1)}>Incrementer</button>

                    <h3>Voici la valeur du compteur {compteur}</h3>
                </div>


        </div>
    );
};

export default App;


// Container de composant


// type ContainerProps = {
//     children: React.ReactNode;
//     titre: string;
// };


// const Container = ({children, titre}:ContainerProps)  => {
//     return (
//         <div style={{
//             backgroundColor: "lightblue",
//             color: "white",
//             padding: "20px",
//         }}>
//             <h3>{titre}</h3>
//             {children}
//         </div>
//     );
// }