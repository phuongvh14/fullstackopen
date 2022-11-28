import React from 'react'

const Header = ({name}) => {
  return (
    <h2>{name}</h2>
  )
}


const Content = ({parts}) => {
  const results = parts.map(part =>
    <p key={part.id}>{part.name} {part.exercises}</p>
    )
  return (
    <div>{results}</div>
  )
}

const Total = ({parts}) => {
  const results = parts.reduce((sum, part) =>
    (sum + part.exercises), 0
  )
  return (
      <p><b>total of {results} exercises</b></p>
  )
}

const Course = ({courses}) => {
  const results = courses.map(course =>
    <div key={course.id}>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
    
    )
  return (
    <div>
      <h1>Web Development Curriculum</h1>
      {results}
    </div>
    
  )
}

export default Course;