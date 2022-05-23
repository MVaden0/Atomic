import React, {useRef, useEffect, useState} from 'react'
import style from '../../styles/FigureCreator.module.css'

const Canvas = (props) => {
  return (
      <div style={{backgroundColor: props.backgroundColor, width: `${props.backgroundWidth}px`, height: `${props.backgroundHeight}px`}}>

      </div>
  );
}

export default Canvas;