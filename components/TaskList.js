import React from 'react'
import Task from './Task'

const TaskList = ({tasks, onComplete, onDelete}) => {
  return (
    <>
      {
        tasks.map((task) => (
          <Task task={task} onComplete={onComplete} onDelete={onDelete}/>
        ))
      }
    </>
  )
}

export default TaskList