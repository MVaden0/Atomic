import { FC, useRef, useEffect, useCallback } from 'react'


export const ControlPoint = ({point, color, display}) => {
    const objectRef = useRef(null);

    const handleMouseMove = useCallback((event) => {
        document.body.style.cursor = "grabbing";
    }, []);

    useEffect(() => {
        const object = objectRef.current;

        object.addEventListener('mousemove', handleMouseMove);

        return () => {
            object.removeEventListener('mousemove', handleMouseMove);
        };
    }, [handleMouseMove]);
    
    return (
        <circle ref={objectRef} style={{display: display ? 'block' : 'none'}} fill={color} cx={point.x} cy={point.y} r={6} />
    )
}