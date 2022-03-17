import React from 'react'
import Task from './Task'

const TaskList = ({tasks, onComplete, onDelete}) => {
  return (
    <>
      {
        tasks.map((task) => (
          <Task key={task.id} task={task} onComplete={onComplete} onDelete={onDelete}/>
        ))
      }
    </>
  )
}

export default TaskList