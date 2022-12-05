import { useState, useEffect } from 'react'
import Filter from './Components/Filter'
import PersonFrom from './Components/PersonForm'
import Persons from './Components/Persons'
import Notification from './Components/Notification'
import personService from './services/persons'
import './index.css';

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [filter, setFilter] = useState('')
  const [noti, setNoti] = useState(null)
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
      const personObject = {
        name: newName,
        number: newNum
      }

      const findDup = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())

      if (typeof findDup !== 'undefined') {
        const userResponse = window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)
        if (userResponse) {
          personService.updatePerson(findDup.id, personObject).then(() => {
            personService.getAll().then(data => setPersons(data))
          })
          setNoti(`Updated contact information for ${newName}`)
          setTimeout(() => {
            setNoti(null)
          }, 3500)
        }
      }
      else {
        personService
          .create(personObject)
          .then(returnedList => setPersons(persons.concat(returnedList)))   
        
        setNoti(`Added ${newName}`)
        setTimeout(() => {
          setNoti(null)
        }, 3500)
      }
      setNewName('')  
      setNewNum('')
  }


  return (
    <div>
      <h2>Phonebook</h2>
      {noti !== null ? <Notification message={noti}/>:null}
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