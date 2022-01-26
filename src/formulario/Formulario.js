import { useState } from "react";

const styles = {
    marginBottom: '10px'
};

function Formulario ( { name = '', lastName = '' } ) {
    const [ usuario, setUsuario ] = useState( {
        name,
        lastName
    } );

    console.log( usuario[ 'name' ] );

    function handleChange ( eventObj ) {
        const { target: { name: key, value } } = eventObj;
        setUsuario( usuario => ( { ...usuario, [ key ]: value } ) )
    }

    function handleSave () {
        console.log( usuario );
    }

    return ( <form>
        <input type="text" placeholder="Nombre" className="form-control"
            name="name"
            value={ usuario.name }
            onChange={ handleChange }
            style={ styles }
        />
        <input type="text" placeholder="Apellido" className="form-control"
            onChange={ handleChange }
            name="lastName"
            value={ usuario.lastName }
            style={ styles }
        />
        <button type="button" className="btn btn-primary"
            onClick={ handleSave }
        >Guardar</button>
    </form> );
}

export default Formulario;
