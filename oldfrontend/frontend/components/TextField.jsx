import React, { useRef, useEffect } from 'react'
import style from '../styles/TextField.module.css'

const TextField = (props) => {
  
  return (
    <div className={style.textFieldContainer}>
        <label style={{color: props.color}} htmlFor={props.name}>{props.name}</label>
        <input style={{color: props.color, backgroundColor: props.backgroundColor}} className={style.textFieldInput} type="text" name={props.name} id={props.name}/>
    </div>
  );
}

export default TextField