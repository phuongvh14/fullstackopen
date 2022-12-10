const express = require('express')
const app = express()

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
  if (person) {
    response.json(person)
  } else {
    response.status(400).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request. params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

app.get('/info', (request, response) => {
    response.write(`<p>Phonebook has info for ${persons.length} people</p>`)
    response.write(`<p>${new Date}</p>`)
    response.end()
})

app.post('/api/persons', (request, response) => {
  if (!request.body.name || !request.body.number) {
    response.status(400).json({'error': 'Missing informnation in request'})
  }
  
  if (persons.some(person => person.name === request.body.name)) {
    response.status(400).json({'error': 'name must be unique'})
  }
  

  let newContact = {
    'name': request.body.name,
    'number': request.body.number,
    'id': Math.floor(Math.random() * 100)
  }

  persons = persons.concat(newContact)

  response.json(newContact)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})