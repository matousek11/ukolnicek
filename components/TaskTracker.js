import React from 'react'
import Header from './Header'
import TaskList from './TaskList'
import AddForm from './AddForm'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const TaskTracker = () => {
  const[tasks, setTasks] = useState([])

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
      <Container fluid className='mx-auto'>
        <Header/>
        <AddForm className='mb-5' onAddTask={addTask}/>
        <TaskList className='text-align-center' tasks={tasks} onComplete = {completeTask} onDelete={deleteTask}/>
      </Container>
      
    </>
  )
}

export default TaskTracker