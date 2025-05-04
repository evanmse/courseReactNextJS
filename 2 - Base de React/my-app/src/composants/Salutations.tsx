
type SalutationProps = {
    name: string;
    age?: number;
};

const Salutation = ({name, age}: SalutationProps) => {
    return (
        <div>
            <h3>Bonjour {name}</h3>
            <h4>Tu as {age} ans</h4>
            <p>Bienvenue dans mon application React !</p>
        </div>
    );
};

export default Salutation;