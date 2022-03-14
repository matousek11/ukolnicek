import React from 'react'
import Header from './Header'
import TaskList from './TaskList'
import AddForm from './AddForm'
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
      completed: true
    }
  ])

  const addTask = (task) => {
    console.log(task)
    setTasks([...tasks, task])
  }

  //change complete status
  const completeTask = (id) => {
    setTasks(tasks.map((task) => task.id === id
    ? {...task, completed: !task.completed} : task
    ))
  }

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <>
        <Header/>
        <AddForm onAddTask={addTask}/>
        <TaskList tasks={tasks} onComplete = {completeTask} onDelete={deleteTask}/>
    </>
  )
}

export default TaskTracker