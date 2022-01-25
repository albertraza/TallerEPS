import Practica04 from "./Practica04";

function obtenerUsuario () {
    const pais = 'RD';
    const ciudad = 'Santo Domingo';
    const nombre = 'Pedro';
    const apellido = 'Perez';

    return {
        nombre,
        apellido,
        edad: 25,
        pais,
        ciudad,
        'padre': 'Julian',
        'madre': 'Juanita',
        nombreCompleto: `${ nombre } ${ apellido }`
    };
}


function Practica03 () {
    const title = "Información del Usuario";
    const { nombre, apellido, nombreCompleto, edad, pais, ciudad } = obtenerUsuario();

    const telephoneBrand = 'cisco 500TS'

    return <div>
        <h1>{ title }</h1>
        <Practica04
            name={ telephoneBrand }
            lastName={ apellido }
            fullName={ nombreCompleto }
            age={ edad }
            city={ ciudad }
            country={ pais }
        />
    </div>
}

export default Practica03;
