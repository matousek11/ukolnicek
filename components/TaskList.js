import React from 'react'
import Task from './Task'

const TaskList = () => {
  return (
    <div>
        <Task text='Zalít zahradu' date='21.5.2022'/>
        <Task text='Nakoupit' date='28.1.2021'/>
    </div>
  )
}

export default TaskList