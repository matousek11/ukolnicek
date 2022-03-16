import React from 'react'
//import Button from './Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Button } from 'react-bootstrap'

const Task = ({task, onComplete, onDelete}) => {
  return (
    <div key={task.id} style={{maxWidth: "500px"}} className={`border shadow-sm mt-2 mx-auto rounded w-75 ${task.completed ? 'completed' : ''}`}>
      <Row >
        <Col>
          <h4 className='mb-0'>{task.task}</h4>
          <p className='mt-0 mb-2'>{task.date}</p>
        </Col>
        <Col className='mt-2 mr-1' sm='auto'>
          <Button variant='outline-primary' size='sm' type='button' onClick={() => onComplete(task.id)}>Dokončeno</Button>
          <Button variant='danger' type='button' size='sm' onClick={() => onDelete(task.id)}>Odstranit</Button>
        </Col>
      </Row>
    </div>
  )
}

export default Task