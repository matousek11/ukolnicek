import React from 'react'
import Task from './Task'

const TaskList = ({tasks, onDelete}) => {
  return (
    <>
      {tasks.map((task) => (
        <Task task = {task} onDelete={onDelete}/>
      ))}
    </>
  )
}

export default TaskList