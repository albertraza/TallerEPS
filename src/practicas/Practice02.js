export default function Practice02 () {
    const saludoInicial = "Hola";
    const nombre = 'Jose';
    const pregunta = " ¿Cómo estas?";

    const saludoConcatenado = saludoInicial + " " + nombre + ' ' + pregunta;

    const saludoTemplate = `${ saludoInicial } ${ nombre } ${ pregunta }!!!`;

    console.log( saludoTemplate );
    return <p> { saludoTemplate } </p>;
}
