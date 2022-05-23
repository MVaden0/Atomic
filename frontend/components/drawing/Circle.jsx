import React, {useRef, useEffect, useState} from 'react'
import BoundingRect from './BoundingRect';


const Circle = (props) => {
    // props
    const { ...rest } = props;

    const selected = useRef(false);
    const [selectedState, setSelectedState] = useState(selected.current);

    const circleRef = useRef(null);

    const toggleSelected = () => {
        if (selected.current == true) {
            selected.current = false;
            setSelectedState(false);
        } else {
            selected.current = true;
            setSelectedState(true);
        };
    };
  
    useEffect(() => {
        const circle = circleRef.current;

        circle.addEventListener('click', (event) => {
            toggleSelected();
        })
    }, [])
  
    return (
        <g>
            <circle
                ref={circleRef} 
                cx={props.cx} 
                cy={props.cy} 
                r={props.r} 
                stroke='#1a1a1a' 
                strokeWidth='0' 
                fill='#00ff00'
            />
            <BoundingRect 
                x1={(parseInt(props.cx) - parseInt(props.r)).toString()}
                y1={(parseInt(props.cy) - parseInt(props.r)).toString()}
                x2={(parseInt(props.cx) - parseInt(props.r)).toString()}
                y2={(parseInt(props.cy) + parseInt(props.r)).toString()}
                x3={(parseInt(props.cx) + parseInt(props.r)).toString()}
                y3={(parseInt(props.cy) + parseInt(props.r)).toString()}
                x4={(parseInt(props.cx) + parseInt(props.r)).toString()}
                y4={(parseInt(props.cy) - parseInt(props.r)).toString()}
                radius='5'
                color='#f8edd6' 
                selected={selectedState}
            />
        </g>
        
    );
}
  
export default Circle;