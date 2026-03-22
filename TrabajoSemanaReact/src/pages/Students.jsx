import React from 'react'
import {useState } from 'react'
import TextInput from '../components/TextInput'
import Button from '../components/Button'

const Students = () => {
    const [nombre, setNombre] = useState("")
    const [edad, setEdad] = useState(0)
    const [carnet, setCarnet] = useState("")

    const [studentList, setStudentList] = useState([])

    function agregarEstudiante() {
        if (nombre.trim() !== "" && edad !== null && carnet.trim() !== "") {

            let estudiante = { nombre, edad, carnet }
            setStudentList([...studentList, estudiante])
            setNombre("")
            setEdad(0)
            setCarnet("")
            console.log(studentList)
        }
    }

    return (
        <>
            <div className='justify-content-center mainDiv p-4 m-5'>
                <h1 className='mb-4'><b>REGISTRO DE ESTUDIANTES</b></h1>
                <TextInput
                    labelText={"Nombre"}
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    type="text"
                    id={"nombre"}
                />
                <TextInput
                    labelText={"Edad"}
                    value={edad}
                    onChange={(e) => setEdad(e.target.value)}
                    type="number"
                    id={"edad"}
                />
                <TextInput
                    labelText={"Carnet"}
                    value={carnet}
                    onChange={(e) => setCarnet(e.target.value)}
                    type="text"
                    id={"carnet"}
                />
                <Button label={"Agregar estudiante"} onClick={agregarEstudiante} />

                <hr className='my-5' />
                <h3>Listado estudiantes:</h3>
                <ol className='list-group list-group-numbered mt-4'>
                    {studentList.map((estudiante, index) => (
                        <li className='list-group-item' key={index}>{estudiante.nombre} | Edad: {estudiante.edad} | Carnet: {estudiante.carnet}</li>
                    ))}
                </ol>
            </div>
        </>
    )
}

export default Students;