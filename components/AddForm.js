import React from 'react'
import { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const id = 0;

const AddForm = ({onAddTask}) => {
    const[taskInput, setTaskInput] = useState('');
    const date = new Date();
    
    const getTime = () => {
        return `${date.getHours()}:${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}`
    }

    const getDateAndTime = () => {
        return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${getTime()}`
    }

    //add new task
    const onSubmit = (e) => {
        e.preventDefault()

        //error message
        if(!taskInput)
        {
            return alert("Zadejte úkol")
        }
        
        onAddTask({id: id, task: taskInput, date: `${getDateAndTime()}`, completed: false})
        setTaskInput('');
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
          );

        id = id + 1;
    }

    return (
        <Form style={{maxWidth: "500px"}} className='mx-auto w-sm-75' onSubmit={(e) => { onSubmit(e)}}>
            <Row>
                <Col>
                    <Form.Group controlId='formTask'>
                        <Form.Control placeholder='Zadejte úkol' type='text' onChange={(e) => {setTaskInput(e.target.value)}}></Form.Control>
                    </Form.Group>
                </Col>
                <Col>
                    <Button variant='primary' type='submit'>Uložit</Button>
                </Col>
            </Row>
        </Form>
  )
}

export default AddForm