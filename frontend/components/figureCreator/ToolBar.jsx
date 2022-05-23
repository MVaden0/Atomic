import React, {useRef, useEffect, useState} from 'react'
import style from '../../styles/FigureCreator.module.css'

const ToolBar= (props) => {
  return (
      <div style={{backgroundColor: props.backgroundColor, width: `${props.width}px`, height: `${props.height}px`}}>

      </div>
  );
}

export default ToolBar;