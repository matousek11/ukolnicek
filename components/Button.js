import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


const Button = ({text, type, style, onClick}) => {
  return (
    <button className={style} type={type} onClick={onClick}>{text}</button>
  )
}

export default Button