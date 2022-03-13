import React from 'react'
import Button from './Button'

const Task = ({text, date}) => {
  return (
    <div>
        <label>{text}</label>
        <label>{date}</label>
        <Button text='Dokončeno' type='button'/>
        <Button text='Odstranit' type='button'/>
    </div>
  )
}

export default Task