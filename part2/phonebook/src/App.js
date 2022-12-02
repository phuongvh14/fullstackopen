import { useState, useEffect } from 'react'
import Filter from './Components/Filter'
import PersonFrom from './Components/PersonForm'
import Persons from './Components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(allData => setPersons(allData))
  }, [])

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumChange = (event) => setNewNum(event.target.value)
  const handleFilterChange = (event) => setFilter(event.target.value)
  
  const addInfo = (event) => {
      event.preventDefault()
      const findDup = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
      if (typeof findDup !== 'undefined') {
        window.alert(`${newName} is already added to the phonebook`)
      }
      else {
        const personObject = {
          name: newName,
          number: newNum
        }

        personService
          .create(personObject)
          .then(returnedList => setPersons(persons.concat(returnedList)))       
      }
      setNewName('')  
      setNewNum('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonFrom 
        onFormSubmit={addInfo}
        name={newName}
        onNameChange={handleNameChange}
        number={newNum}
        onNumChange={handleNumChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} />
    </div>
  )
}

export default App