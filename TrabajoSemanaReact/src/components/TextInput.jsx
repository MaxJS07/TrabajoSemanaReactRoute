import React from 'react'

const TextInput = ({ labelText, value, onChange, type, id, placeholder }) => {
    return (
        <>
            <div className='mb-3'>
                <label htmlFor={id} className='form-label'>{labelText}</label>
                <input type={type} value={value} onChange={onChange} className='form-control' id={id} placeholder={placeholder}/>
            </div>
        </>
    )
}

export default TextInput;