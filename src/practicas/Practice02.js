
let templateString = ` Hola mundo
siguiente linea
`;


const nombre = 'Miguel';
const apellido = 'Peguero';

const saludo = `Hola, ${ nombre } ${ apellido }, ¿Cómo estas?`;


export default function Practice02 () {
    console.log( templateString );
    console.log( saludo );
    const saludoInicial = "Hola";
    const nombre = 'Jose';
    const pregunta = " ¿Cómo estas?";

    const saludoConcatenado = saludoInicial + " " + nombre + ' ' + pregunta;

    const saludoTemplate = `${ saludoInicial } ${ nombre } ${ pregunta }!!!`;

    console.log( saludoTemplate );
    return <p> { saludoTemplate } </p>;
}
