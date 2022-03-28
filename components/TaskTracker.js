import React from 'react'
import Header from './Header'
import TaskList from './TaskList'
import AddForm from './AddForm'
import { useState } from 'react'
import { Container } from 'react-bootstrap'

const TaskTracker = () => {
  const[tasks, setTasks] = useState([])
  const[id, setId] = useState(0)

  //add new task
  const addTask = (task) => {
    const incrementId = () => {
        setId(prevId => {
        return prevId + 1
        })
    }
    task.id = id
    incrementId()
    setTasks(tasks => [...tasks, task])
  }

  //change status of task
  const completeTask = (id) => {
    setTasks(lastTasks => lastTasks.map((task) => task.id === id ? {...task, completed: !task.completed} : task))
  }

  //delete task
  const deleteTask = (id) => {
    setTasks(lastTasks => lastTasks.filter((task) => task.id !== id))
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