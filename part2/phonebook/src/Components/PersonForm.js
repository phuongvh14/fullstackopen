import React from 'react'

const PersonForm = ({onFormSubmit, name, onNameChange, number, onNumChange}) => {
    return (
        <form onSubmit={onFormSubmit}>
            <div>
            name: <input 
            value={name}
            onChange={onNameChange}
            />
            </div>
            <div>
            number: <input 
            value={number}
            onChange={onNumChange}
            />
            </div>
            <div>
            <button type="submit">add</button>
            </div>
        </form>
    )
    
}

export default PersonForm;