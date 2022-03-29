import React from 'react'
import Header from './Header'
import TaskList from './TaskList'
import AddForm from './AddForm'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import {nanoid} from 'nanoid'

const TaskTracker = () => {
  const[tasks, setTasks] = useState({})

  //add new task
  const addTask = (task) => {
    //creates id for task
    task.id = nanoid()

    setTasks(tasks => {
      return {...tasks, [task.id]: task}
    })
  }

  //change status of task
  const completeTask = (id) => {
    setTasks(lastTasks => changeCompleteTask(id, lastTasks))
  }

  const changeCompleteTask = (id, lastTasks) => {
    //load exact task
    let targetTask = lastTasks[id]
    //change bool to oposite value
    targetTask={...targetTask, completed: lastTasks[id].completed ? false : true}
    return {...lastTasks, [id]: targetTask}
  }

  //delete task
  const deleteTask = (id) => {
    setTasks(lastTasks => deleteFunction(id, lastTasks))
  }

  const deleteFunction = (id, lastTasks) => {
    //load values and filter out deleted object
    let tasks = Object.values(lastTasks).filter((task) => task.id !== id)
    let newTasks
    tasks.map(task => {
        newTasks = {...newTasks, [task.id]: task}
      })
    return newTasks
  }

  return (
    <Container className='mx-auto'>
      <Header/>
      <AddForm className='mb-5' onAddTask={addTask}/>
      <TaskList className='text-align-center' tasks={tasks ? Object.values(tasks) : null} onComplete = {completeTask} onDelete={deleteTask}/>
    </Container>
  )
}

export default TaskTracker