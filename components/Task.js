import React from 'react'
import Button from './Button'

const Task = ({task, onDelete}) => {
  return (
    <div key={task.id}>
      <p>{task.date}</p>
      <p>{task.text}</p>
      <Button text='Dokončeno' type='button'/>
      <Button text='Odstranit' type='button' onClick={() => onDelete(task.id)}/>
    </div>
  )
}

export default Task