import { FC, useRef, useEffect, useCallback } from 'react'

import { Point } from '../types'

interface Props {
    point: Point;
    color: string;
    display: boolean;
}

export const ControlPoint: FC<Props> = ({point, color, display}) => {
    const objectRef = useRef<SVGCircleElement>(null);

    const handleMouseMove = useCallback((event: MouseEvent) => {
        document.body.style.cursor = "grabbing";
    }, []);

    useEffect(() => {
        const object = objectRef.current as SVGCircleElement;

        object.addEventListener('mousemove', handleMouseMove);

        return () => {
            object.removeEventListener('mousemove', handleMouseMove);
        };
    }, [handleMouseMove]);
    
    return (
        <circle ref={objectRef} style={{display: display ? 'block' : 'none'}} fill={color} cx={point.x} cy={point.y} r={6} />
    )
}