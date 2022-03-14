import React from 'react'
import Header from './Header'
import Button from './Button'
import TaskList from './TaskList'
import { useState } from 'react'

const TaskTracker = () => {
  const[tasks, setTasks] = useState([
    {
      id: 1,
      task: 'task',
      date:'10:11 10.4.2022',
      completed: false
    },
    {
      id: 2,
      task: 'task',
      date:'10:11 10.4.2022',
      completed: false
    },
    {
      id: 3,
      task: 'task',
      date:'10:11 10.4.2022',
      completed: false
    }
  ])

  const[taskInput, setTaskInput] = useState('');

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const addTask = () => {
    
    const newTask = {id: 1, task: taskInput, date: "2022", completed: false}
    console.log(newTask)
    setTasks(...tasks, newTask)
  }

  return (
    <>
        <Header/>
        <input id='taskInput' type="text" placeholder='Zadejte úkol' onChange={(e) => {setTaskInput(e.target.value)}}/>
        <Button text='Uložit' type='submit' onClick={addTask}/>
        <TaskList tasks={tasks} onDelete={deleteTask}/>
    </>
  )
}

export default TaskTracker