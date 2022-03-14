import React from 'react'
import Button from './Button';
import { useState } from 'react';



const AddForm = ({onAddTask}) => {
    const[taskInput, setTaskInput] = useState('');
    const date = new Date();

    const getDateAndTime = () => {
        return `${date.getHours()}:${date.getMinutes()} ${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if(!taskInput)
        {
            return
        }
        //id
        onAddTask({id: 5, task: taskInput, date: `${getDateAndTime()}`, completed: false})
        setTaskInput('');
    }

    return (
        <form onSubmit={(e) => { onSubmit(e)}}>
            <input type="text" placeholder='Zadejte úkol' onChange={(e) => {setTaskInput(e.target.value)}}/>
            <Button text='Uložit' type='submit'/>
        </form>
  )
}

export default AddForm