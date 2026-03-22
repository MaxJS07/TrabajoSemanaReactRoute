import React from 'react'
import { useState } from 'react'
import TextInput from '../components/TextInput'
import Button from '../components/Button'

const Tasks = () => {

    const [tarea, setTarea] = useState("")
    const [listadoTareas, setListadoTareas] = useState([]);

    const agregarTarea = () => {
        if (tarea.trim() !== "") {
            setListadoTareas([...listadoTareas, tarea]);
            setTarea("")
            console.log(listadoTareas)
        }
    }

    const eliminarTarea = (index) => {
        const nuevasTareas = listadoTareas.filter((_, i) => i !== index);
        setListadoTareas(nuevasTareas);
    }



    return (
        <div className='d-flex justify-content-center align-items-center min-vh-100 w-100'>
            <div className='d-flex flex-column align-items-center w-75'>
                <p className="text-center fs-2 fw-bold text-primary">"TO DO" LIST</p>

                <TextInput
                    labelText={"Ingrese tarea"}
                    value={tarea}
                    onChange={(e) => setTarea(e.target.value)}
                    type={"text"}
                    id={"tarea"}
                />

                <Button
                    label={"Agregar tarea"}
                    onClick={agregarTarea}
                />

                <ol className='list-group list-group-numbered mt-4 w-100 '>
                    {listadoTareas.map((tarea, index) => (
                        <li className='list-group-item d-flex align-items-center justify-content-between' key={index}>{tarea} <Button label={"✓"} onClick={() => eliminarTarea(index)}></Button></li>
                    ))}
                </ol>
            </div>


        </div>
    )
}

export default Tasks