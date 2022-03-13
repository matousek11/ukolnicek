import React from 'react'
import Header from './Header'
import Button from './Button'
import TaskList from './TaskList'

const TaskTracker = () => {
  return (
    <>
        <Header/>
        <input type="text" placeholder='Zadejte úkol'/>
        <Button text='Uložit' type='submit'/>
        <TaskList/>
    </>
  )
}

export default TaskTracker