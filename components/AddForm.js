import React from 'react'
import { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import moment from 'moment'



const AddForm = ({onAddTask}) => {
    const[taskInput, setTaskInput] = useState('');
    const[id, setId] = useState(0);
    
    const incrementId = () => {
        setId(prevId => {
        return prevId + 1
        })
    }

    //verifies user input
    const onSubmit = (e) => {
        //prevents to submit data to server
        e.preventDefault()
        //load actual time and date
        let date = moment().format('DD.MM.YYYY HH:mm')

        //error message
        if(!taskInput)
        {
            alert("Zadejte úkol")
            return
        }
            
        onAddTask({id: id, task: taskInput, date: date, completed: false})
        incrementId()
        console.log(id)
        //delete all inputs
        setTaskInput('')
    }

    return (
        <Form style={{maxWidth: "500px"}} className='mx-auto w-sm-75' onSubmit={(e) => { onSubmit(e)}}>
            <Row>
                <Col>
                    <Form.Group controlId='formTask'>
                        <Form.Control placeholder='Zadejte úkol' type='text' value={taskInput} onChange={(e) => {setTaskInput(e.target.value)}}></Form.Control>
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