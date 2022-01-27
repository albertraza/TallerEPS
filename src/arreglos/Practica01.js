
// const _MODULE_NAME = 'Prueba de los arreglos';

import React from "react";
import Table from "../components/Table";
import Formulario from "../formulario/Formulario";


// function calculateITBIS ( amount ) {
//     return amount * 0.18;
// }

// const calculateTransport = ( totalPrice ) => totalPrice * 0.10;

// export function obtenerUsuario () {
//     const nombre = 'Pedro';
//     const apellido = 'Perez';

//     return {
//         nombre,
//         apellido,
//         edad: 25,
//         'padre': 'Julian',
//         'madre': 'Juanita',
//         nombreCompleto: `${ nombre } ${ apellido }`,
//     };
// }

// export default function Practica01 () {
//     // const arreglo = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

//     // const nuevoArreglo = arreglo.filter( num => num % 2 === 0 )
//     //     .map( num => num * num );

//     const arreglo = [ true, undefined, false, 0, '' ];

//     // console.log( nuevoArreglo );

//     return <h1>
//         { arreglo.map( num => {
//             // return <p>{ num }</p>
//             return num;
//         } ) }
//     </h1>;
// }

const createUser = ( name, lastName, age, id ) => ( { name, lastName, age, id } );

export default function Practica02 () {
    const userArray = [
        createUser( 'Jose', 'Perez', 15, 1 ),
        createUser( 'Vantroy', 'Sanchez', 16, 2 ),
        createUser( 'Moises', 'Tiburcio', 17, 3 ),
        createUser( 'Moises', 'Rojas', 17, 4 )
    ];

    const columns = [
        {
            label: 'Nombre',
            prop: 'name'
        },
        {
            label: 'Apellido',
            prop: 'lastName'
        }
    ];

    return <>
        <Table data={ userArray } columns={ columns } />
    </>;
}
