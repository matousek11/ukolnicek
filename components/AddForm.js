import React from 'react'
import { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const id = 0;
const date = new Date();

const AddForm = ({onAddTask}) => {
    const[taskInput, setTaskInput] = useState('');
    
    const getTime = () => {
        return `${date.getHours()}:${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}`
    }

    const getDateAndTime = () => {
        return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${getTime()}`
    }

    //verifies user input
    const onSubmit = (e) => {
        //prevents to submit data to server
        e.preventDefault()

        //error message
        if(!taskInput)
        {
            return alert("Zadejte úkol")
        }
        
        onAddTask({id: id, task: taskInput, date: `${getDateAndTime()}`, completed: false})
        setTaskInput('');
        //delete all inputs
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