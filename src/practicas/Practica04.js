import Practica05 from "./Practica05";

function Practica04 ( props ) {
    const { name, lastName, fullName, age, city, country } = props;

    return <div>
        <p><b>Nombre: </b> { name } </p>
        <p><b>Apellido: </b> { lastName }</p>
        <p><b>Nombre Completo: </b> { fullName }</p>
        <p><b>Edad: </b> { age }</p>
        <p><b>Dirección: </b> { `${ city }, ${ country }` }</p>

        <Practica05
            nombre={ name }
        />
    </div>;
}

export default Practica04;
