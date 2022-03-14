import React from 'react'
import Button from './Button'

const Task = ({task, onComplete, onDelete}) => {
  return (
    <div key={task.id} className={task.completed ? 'completed' : ''}>
      <h3>{task.task}</h3>
      <p>{task.date}</p>
      <Button text='Dokončeno' type='button' onClick={() => onComplete(task.id)}/>
      <Button text='Odstranit' type='button' onClick={() => onDelete(task.id)}/>
    </div>
  )
}

export default Task