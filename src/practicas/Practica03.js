import Practica04 from "./Practica04";


function obtenerUsuario () {
    const pais = 'RD';
    const ciudad = 'Santo Domingo';
    const nombre = 'Pedro';
    const apellido = 'Perez';

    const obj = {
        nombre: 'alberto',
        ciudad,
        pais,
        'calle': 'Fantino Falco #40'
    };

    return {
        nombre,
        ...obj,
        apellido,
        edad: 25,
        'padre': 'Julian',
        'madre': 'Juanita',
        nombreCompleto: `${ nombre } ${ apellido }`,
    };
}


function Practica03 () {
    const title = "Información del Usuario";
    const usuario = obtenerUsuario();
    const { nombre, apellido, nombreCompleto, edad, ciudad, pais, ...obj } = usuario;
    const props = {
        name: nombre,
        lastName: apellido,
        age: edad,
        fullName: nombreCompleto,
        city: ciudad,
        country: pais
    };
    return <div>
        <h1>{ title }</h1>
        {/* <Practica04
            {
            ...props
            }
        /> */}
        <Practica04
            name={ nombre }
            lastName={ apellido }
            fullName={ nombreCompleto }
            age={ edad }
            city={ ciudad }
            country={ pais }
        />
    </div>
}

export default Practica03;
