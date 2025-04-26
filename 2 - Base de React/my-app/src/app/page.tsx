import React from "react";

const Test = ({ nom }: { nom: string }) => {
    return <h1>Voici un test de {nom} </h1>
}
// Element en react sans JSX
// const h2 = React.createElement('h2', null, 'Voici un titre avec react sans JSX');

const Welcome = () => {
    const nom = "Evan";
    const age = 19;
    return (
        <div className="container">
            <h1>Welcome {nom} to My App</h1>
            <p>This is a simple React application.</p>
            <Test nom={nom === "Evan" ? "Evan le dev" : "Personne"} />
            {age > 18 ? (
                <p>Vous êtes majeur</p>
            ) : (
                <p>Vous êtes mineur</p>
            )}
        </div>
    );
};

export default Welcome;