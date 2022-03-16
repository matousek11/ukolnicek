import React from 'react'
//import Button from './Button';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form, Row, Col } from 'react-bootstrap';

const id = 0;


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
            return alert("Zadejte úkol")
        }
        
        onAddTask({id: id, task: taskInput, date: `${getDateAndTime()}`, completed: false})
        setTaskInput('');
        id = id + 1;
    }

    return (
        <Form style={{maxWidth: "500px"}} className='mx-auto w-75' onSubmit={(e) => { onSubmit(e)}}>
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