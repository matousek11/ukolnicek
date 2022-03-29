import React from 'react'
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import moment from 'moment'

const AddForm = ({onAddTask}) => {
    const[taskInput, setTaskInput] = useState('');

    //verifies user input
    const onSubmit = (e) => {
        //prevents to submit data to server
        e.preventDefault()
        //load actual time and date
        let date = moment()

        //error message
        if(!taskInput)
        {
            alert("Zadejte úkol")
            return
        }
            
        onAddTask({task: taskInput, date: date, completed: false})
        //delete all inputs
        setTaskInput('')
    }

    return (
        <Form className='mx-auto w-sm-75 elementMaxWidth' onSubmit={(e) => {onSubmit(e)}}>
            <div className='d-inline-flex'>
                <Form.Group controlId='formTask'>
                    <Form.Control placeholder='Zadejte úkol' type='text' value={taskInput} onChange={(e) => {setTaskInput(e.target.value)}}></Form.Control>
                </Form.Group>
                <Button variant='primary' className="margin" type='submit'>Uložit</Button>
            </div>
        </Form>
    )
}

export default AddForm