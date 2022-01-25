function App () {
    let resultado;
    const constante = 10;
    let variable = 5;
    const nombre = 'Albert';
    const booleano = true;
    const decimales = 10.255845;

    const objeto = {
        nombre: 'Luis Moises'
    };

    const objeto2 = objeto;

    const objeto3 = objeto2;

    objeto3.nombre = 'Rusbel';

    console.log( { objeto, objeto2, objeto3 } );

    return <h1>Hola Word!!!</h1>
}

export default App;
