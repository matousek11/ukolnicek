import React from 'react'
import Header from './Header'
import TaskList from './TaskList'
import AddForm from './AddForm'
import { useState } from 'react'
import { Container } from 'react-bootstrap'

const TaskTracker = () => {
  const[tasks, setTasks] = useState([])
  

  //add new task
  const addTask = (task) => {
    setTasks([...tasks, task])
  }

  //change status of task
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
    <Container className='mx-auto'>
      <Header/>
      <AddForm className='mb-5' onAddTask={addTask}/>
      <TaskList className='text-align-center' tasks={tasks} onComplete = {completeTask} onDelete={deleteTask}/>
    </Container>
  )
}

export default TaskTracker