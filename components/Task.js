import React from 'react'
//import Button from './Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Button } from 'react-bootstrap'

const Task = ({task, onComplete, onDelete}) => {
  return (
    <div style={{maxWidth: "500px"}} className={`border shadow-sm mt-2 mx-auto rounded w-sm-75 ${task.completed ? 'completed' : ''} `}>
      <Row>
        <hr className={`strikethrough ${task.completed ? 'strikethrough' : 'nostrikethrough'}`} display = "none"/>
        <Col>
          <h4 className='mb-0 wrap'>{task.task}</h4>
          <p className='mt-0 mb-2 text-muted'>{task.date}</p>
        </Col>
        <Col className='mt-3 d-flex align-items-start justify-content-end '>
          <Button className variant='outline-primary' size='sm' type='button' onClick={() => onComplete(task.id)}>Dokončeno</Button>
          <Button variant='danger' size='sm' type='button' onClick={() => onDelete(task.id)}>Odstranit</Button>
        </Col>
      </Row>
    </div>
  )
}

export default Task