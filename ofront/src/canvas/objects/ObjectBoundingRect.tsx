import { FC } from 'react'

import { Point } from '../CanvasObjectTypes'


interface Props {
    selected: boolean;
    p1: Point;
    p2: Point;
    p3: Point;
    p4: Point;
}

export const ObjectBoundingRect: FC<Props> = ({selected, p1, p2, p3, p4}) => {

    return (
        <g>
            <line style={{display: selected ? 'block' : 'none'}} stroke='#fff0ce' strokeWidth={2} strokeDasharray='5, 5' x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} />
            <line style={{display: selected ? 'block' : 'none'}} stroke='#fff0ce' strokeWidth={2} strokeDasharray='5, 5' x1={p2.x} y1={p2.y} x2={p3.x} y2={p3.y} />
            <line style={{display: selected ? 'block' : 'none'}} stroke='#fff0ce' strokeWidth={2} strokeDasharray='5, 5' x1={p3.x} y1={p3.y} x2={p4.x} y2={p4.y} />
            <line style={{display: selected ? 'block' : 'none'}} stroke='#fff0ce' strokeWidth={2} strokeDasharray='5, 5' x1={p4.x} y1={p4.y} x2={p1.x} y2={p1.y} />
            <circle style={{display: selected ? 'block' : 'none'}} fill='#fff0ce' cx={p1.x} cy={p1.y} r={4} />
            <circle style={{display: selected ? 'block' : 'none'}} fill='#fff0ce' cx={p2.x} cy={p2.y} r={4} />
            <circle style={{display: selected ? 'block' : 'none'}} fill='#fff0ce' cx={p3.x} cy={p3.y} r={4} />
            <circle style={{display: selected ? 'block' : 'none'}} fill='#fff0ce' cx={p4.x} cy={p4.y} r={4} />
        </g>
    )
}