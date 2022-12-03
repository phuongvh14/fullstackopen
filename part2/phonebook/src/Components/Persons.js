import React from 'react'
import Person from './Person'


const Persons = ({persons, filter}) => {
    let personsFiltered = persons
    if (filter) {
        personsFiltered = persons.filter(person => new RegExp(filter, "i").test(person.name));
    }
    return personsFiltered.map(person => {
        return (
            <Person key={person.id} person={person} />
    )})
}

export default Persons;