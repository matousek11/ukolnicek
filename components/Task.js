import React from 'react'
import { Row, Col, Button, ButtonGroup } from 'react-bootstrap'

const Task = ({task, onComplete, onDelete}) => {
  return (
    <div className={`w-sm-75 border rounded shadow-sm mx-auto mt-2 padding ${task.completed ? 'completed' : ''} `} style={{maxWidth: "500px"}}>
      <Row className={`position-relative`}>
        <hr className={`strikethrough ${task.completed ? 'strikethrough' : 'nostrikethrough'}`}/>
        <Col>
          <h4 className='mb-0 wrap'>{task.task}</h4>
          <p className='mt-0 mb-2 text-muted'>{task.date}</p>
        </Col>
        <Col className='mt-3 mb-2 d-flex align-items-start justify-content-end'>
          <ButtonGroup className='me-2'>
            <Button className variant='outline-primary' size='sm' type='button' onClick={() => onComplete(task.id)}>Dokončeno</Button>
          </ButtonGroup>
          <ButtonGroup className='me-2'>
            <Button variant='danger' size='sm' type='button' onClick={() => onDelete(task.id)}>Odstranit</Button>
          </ButtonGroup>
        </Col>
      </Row>
    </div>
  )
}

export default Task