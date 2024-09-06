import React,{useState} from 'react';

function Agregarseleccion() {
const [nombre, setNombre]=useState('');
const [opciones, setOpciones]=useState([]);
const [seleccion, setSeleccion]=useState('');

const agregarOpcion = () => {
    if(nombre && !opciones.includes(nombre)){
        setOpciones([...opciones, nombre])
        setNombre('');
    }
}

const cambiarSeleccion = (e) => {
setSeleccion(e.target.value)
}
const publicarSeleccion = () => {
    alert(`Opción seleccionada: ${seleccion}`);
}
return(
<div>
    <input
    type="text"
    value={nombre}
    onChange={(e) => setNombre(e.target.value)}
    placeholder='Introduce un nombre'
    />

    <button onClick={agregarOpcion}>Agregar</button>
    <select onChange={cambiarSeleccion} value={seleccion}>
        <option value="">Seleccione una Opcion</option>
        {opciones.map((opcion, index) => (
            <option key={index} value={opcion}>{opcion}</option>
        ))}
    </select>
    <button onClick={publicarSeleccion} disabled={!seleccion}>Publicar</button>

</div>
);
}

export default Agregarseleccion;