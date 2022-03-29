import React from 'react'
import Task from './Task'

const TaskList = ({tasks, onComplete, onDelete}) => {
  if(tasks)
  {
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
  return (
    <p className='mt-5 text-center text-muted'>There's no tasks, add some new tasks.</p>
  )
}

export default TaskList