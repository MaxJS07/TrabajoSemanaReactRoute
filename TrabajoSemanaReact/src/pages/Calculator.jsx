import React from 'react'
import { useState } from 'react'
import TextInput from '../components/TextInput'
import Button from '../components/Button'

const Calculator = () => {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState(0)

    const limpiar = () => {
        setNum1(0)
        setNum2(0)
        setResult(0)
    }

    const sumar = () => {
        let suma = parseFloat(num1) + parseFloat(num2)
        setResult(suma)
    }

    const restar = () => {
        let resta = parseFloat(num1) - parseFloat(num2)
        setResult(resta)
    }

    const multiplicar = () => {
        let multp = parseFloat(num1) * parseFloat(num2)
        setResult(multp)
    }

    const dividir = () => {
        let division = parseFloat(num1) / parseFloat(num2)
        setResult(division)
    }

    return (
        <div className='d-flex justify-content-center align-items-center min-vh-100 calc w-100'>
            <div className='d-flex flex-column justify-content-center w-50 borderStyled p-5'>
                <p className="text-center fs-2 fw-bold text-primary">OPERACIONES CON DOS NÚMEROS</p>
                <TextInput
                    labelText="Primer número"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                    type="number"
                    id="num1"
                />
                <TextInput
                    labelText="Segundo número"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                    type="number"
                    id="num2"
                />
                <div className='d-flex justify-content-center gap-3'>
                    <Button
                        label={"Sumar"}
                        onClick={sumar}
                    />
                    <Button
                        label={"Restar"}
                        onClick={restar}
                    />
                    <Button
                        label={"Multiplicar"}
                        onClick={multiplicar}
                    />
                    <Button
                        label={"Dividir"}
                        onClick={dividir}
                    />
                </div>
                <div className='d-flex justify-content-center gap-3 mt-4'>
                    <Button
                        label={"Limpiar"}
                        onClick={limpiar}
                    />
                </div>

                <h2 className='mt-4 text-center'>Resultado: {result}</h2>
            </div>

        </div>
    )
}

export default Calculator