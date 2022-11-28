import React from 'react'

const Persons = ({persons, filter}) => {
    let personsFiltered = persons
    if (filter) {
        personsFiltered = persons.filter(person => new RegExp(filter, "i").test(person.name));
    }
    return personsFiltered.map(person => <p key={person.name}>{person.name} {person.number}</p>)
}

export default Persons;