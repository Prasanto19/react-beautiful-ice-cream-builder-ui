import React from 'react'
import classes from './Scoop.module.css'
const Scoop = ({scoop}) => {
  return (
    <div className={`${classes.scoop} ${classes[scoop]} `}/>
  )
}

export default Scoop