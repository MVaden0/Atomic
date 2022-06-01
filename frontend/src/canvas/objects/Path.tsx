import { FC, useState, useCallback, useEffect, useRef, useReducer } from 'react'

import { ObjectBoundingRect } from './ObjectBoundingRect'
import { State } from '../Canvas'
import { Point } from'../CanvasObjectTypes'
import { computeCursorType, objectMouseDown } from './ObjectAPI'

import { BezierEndPoint, BezierMiddlePoint, BezierPoints } from '../types'

interface Props {
    points: BezierPoints;
}

export const Path: FC<Props> = ({points}) => {
    const mapPoints = (bezierPoints: BezierPoints) => {
        // content to be rendered
        const content: React.ReactNode[] = [];

        // points on the curve
        const startPoint: BezierEndPoint = bezierPoints.startPoint;
        const points: BezierMiddlePoint[] = bezierPoints.points;
        const endPoint: BezierEndPoint = bezierPoints.endPoint;

        // check if middle points are present
        if (points.length < 1) {
            const curve: React.ReactNode = (
                <g>
                    <path fill="transparent" shapeRendering="geometricPrecision" stroke="red" strokeWidth="5"
                        d={
                        `M ${startPoint.x}, ${startPoint.y}
                        C ${startPoint.xC}, ${startPoint.yC} 
                          ${endPoint.xC}, ${endPoint.yC} 
                          ${endPoint.x}, ${endPoint.y}
                        M ${startPoint.x}, ${startPoint.y}
                        Z`
                        }
                    />
                    <circle fill="#fff0ce" cx={startPoint.x} cy={startPoint.y} r={6} />
                    <circle fill="#fff0ce" cx={startPoint.xC} cy={startPoint.yC} r={6} />
                    <circle fill="#fff0ce" cx={endPoint.xC} cy={endPoint.yC} r={6} />
                    <circle fill="#fff0ce" cx={endPoint.x} cy={endPoint.y} r={6} />
                </g>
            );

            content.push(curve);
        } else {
            for (let i: number = 0; i < points.length - 1; i++) {
                const curve: React.ReactNode = (
                    <g>
                        <path fill="transparent" shapeRendering="geometricPrecision" stroke="red" strokeWidth="5"
                            d={
                            `M ${bezierPoints[i].x}, ${bezierPoints[i].y}
                            C ${bezierPoints[i].xC}, ${bezierPoints[i].yC} ${bezierPoints[i + 1].xC}, ${bezierPoints[i + 1].yC} ${bezierPoints[i + 1].x}, ${bezierPoints[i + 1].y}
                            M ${bezierPoints[i].x}, ${bezierPoints[i].y}
                            Z`
                            }
                        />
                        <circle fill="#fff0ce" cx={bezierPoints[i].x} cy={bezierPoints[i].y} r={6} />
                        <circle fill="#fff0ce" cx={bezierPoints[i].xC} cy={bezierPoints[i].yC} r={6} />
                        <circle fill="#fff0ce" cx={bezierPoints[i + 1].xC} cy={bezierPoints[i + 1].yC} r={6} />
                        <circle fill="#fff0ce" cx={bezierPoints[i + 1].x} cy={bezierPoints[i + 1].y} r={6} />
                    </g>
                );
    
                content.push(curve);
            }
        }

        return content;
    };

    return (
        <g>
            {mapPoints(points)}
        </g>
    )
}