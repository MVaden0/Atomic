import React, {useRef, useEffect, useState} from 'react'

const BoundingRect = (props) => {
    return (
        <g>
            <line x1={props.x1} y1={props.y1} x2={props.x2} y2={props.y2} style={{display: props.selected ? 'block' : 'none', stroke: props.color, strokeWidth: 2, strokeDasharray: '5, 5'}} />
            <line x1={props.x2} y1={props.y2} x2={props.x3} y2={props.y3} style={{display: props.selected ? 'block' : 'none', stroke: props.color, strokeWidth: 2, strokeDasharray: '5, 5'}} />
            <line x1={props.x3} y1={props.y3} x2={props.x4} y2={props.y4} style={{display: props.selected ? 'block' : 'none', stroke: props.color, strokeWidth: 2, strokeDasharray: '5, 5'}} />
            <line x1={props.x4} y1={props.y4} x2={props.x1} y2={props.y1} style={{display: props.selected ? 'block' : 'none', stroke: props.color, strokeWidth: 2, strokeDasharray: '5, 5'}} />
            <circle cx={props.x1} cy={props.y1} r={props.radius} style={{display: props.selected ? 'block' : 'none', fill: props.color}} />
            <circle cx={props.x2} cy={props.y2} r={props.radius} style={{display: props.selected ? 'block' : 'none', fill: props.color}} />
            <circle cx={props.x3} cy={props.y3} r={props.radius} style={{display: props.selected ? 'block' : 'none', fill: props.color}} />
            <circle cx={props.x4} cy={props.y4} r={props.radius} style={{display: props.selected ? 'block' : 'none', fill: props.color}} />
        </g>
    );
}
  
export default BoundingRect;