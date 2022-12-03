import React from 'react'
import personService from '../services/persons'

const Person = ({person}) => {
    const handleDelete = () => {
        const userResponse = window.confirm(`Delete ${person.name} ?`)

        if (userResponse) {
            personService.deletePerson(person.id)
        }
    }
    return (
        <div>
            <p>{person.name} {person.number}</p>
            <form onClick={handleDelete}>
                <button value={person.id}>delete</button>
            </form>
        </div>
    )
}

export default Person;