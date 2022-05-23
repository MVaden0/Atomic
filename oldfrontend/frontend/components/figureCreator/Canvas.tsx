import React, {useRef, useEffect, useState} from 'react'
import style from '../../styles/FigureCreator.module.css'
import Ellipse from '../drawing/Ellipse';

const Canvas = (props) => {
  return (
    <div ref={props.canvasContainerRef} className={style.container} style={{backgroundColor: props.backgroundColor, width: `${props.backgroundWidth}px`, height: `${props.backgroundHeight}px`}}>
      <svg className={style.backgroundCanvas} width='1520px' height='936px'>
        <line style={{display: 'block', stroke: '#f8edd6', strokeWidth:2, strokeDasharray: '5, 5'}} x1='10' y1="0" x2='10' y2="936" />
      </svg>
      <div className={style.canvasContainer} style={{width: `${props.canvasWidth}px`, height: `${props.canvasHeight}px`, top: `${props.canvasTop}px`, left: `${props.canvasLeft}px`}} >
        <svg ref={props.canvasRef} id="surface" xmlns="http://www.w3.org/2000/svg" className={style.canvas} width={`${props.canvasWidth}px`} height={`${props.canvasHeight}px`} >
            {
              props.objects.map((object, i) => <Ellipse key={i} cx={object.cx} cy={object.cy} rx={object.rx} ry={object.ry} />)
            }
        </svg>
      </div>
    </div>
  );
}

export default Canvas;