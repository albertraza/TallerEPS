// Crear un componente que te salude llamado Practica05.
// El componente debe recibir en sus props el nombre de la persona a saludar.
// y este debe renderizarse dentro del componente Practica04.
// El saludo debe de tener tener el siguente texto "Hola, NOMBRE ¿como estas?"

function Practica05 ( props ) {
    const { nombre } = props;
    const saludo = `Hola, ${ nombre } ¿Como estas?`
    return <p> { saludo } </p>
}

export default Practica05;
