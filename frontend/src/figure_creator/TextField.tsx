import React, { useRef, useEffect, FC, useState } from 'react'
import style from '../styles/FigureCreator.module.css'

interface Props {
    color: string,
    name: string,
    backgroundColor: string
}



const TextField: FC<Props> = (props) => {
  
  return (
    <div className={style.textFieldContainer}>
        <label style={{color: props.color}} htmlFor={props.name}>{props.name}</label>
        <input style={{color: props.color, backgroundColor: props.backgroundColor}} className={style.textFieldInput} type="text" name={props.name} id={props.name}/>
    </div>
  );
}

export default TextField