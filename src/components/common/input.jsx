import React from 'react'

const Input = ({ name, label, value, onChange }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{ label }</label>
            <input 
                autoFocus 
                name={name}
                value={value}
                onChange={onChange}
                type="text" 
                id={name} 
                className="form-control"
            />
        </div>
    )
}

export default Input
