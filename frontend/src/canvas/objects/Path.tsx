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
                    <circle style={{display: 'none'}} fill="#fff0ce" cx={startPoint.x} cy={startPoint.y} r={6} />
                    <circle style={{display: 'none'}} fill="#fff0ce" cx={startPoint.xC} cy={startPoint.yC} r={6} />
                    <circle style={{display: 'none'}} fill="#fff0ce" cx={endPoint.xC} cy={endPoint.yC} r={6} />
                    <circle style={{display: 'none'}} fill="#fff0ce" cx={endPoint.x} cy={endPoint.y} r={6} />
                </g>
            );

            content.push(curve);
        } else {
            // compute start curve
            const firstCurve: React.ReactNode = (
                <g>
                    <path fill="transparent" shapeRendering="geometricPrecision" stroke="red" strokeWidth="5"
                        d={
                        `M ${startPoint.x}, ${startPoint.y}
                        C ${startPoint.xC}, ${startPoint.yC} 
                          ${points[0].x1C}, ${points[0].y1C} 
                          ${points[0].x}, ${points[0].y}
                        M ${startPoint.x}, ${startPoint.y}
                        Z`
                        }
                    />
                    <circle style={{display: 'none'}} fill="#fff0ce" cx={startPoint.x} cy={startPoint.y} r={6} />
                    <circle style={{display: 'none'}} fill="#fff0ce" cx={startPoint.xC} cy={startPoint.yC} r={6} />
                    <circle style={{display: 'none'}} fill="#fff0ce" cx={points[0].x1C} cy={points[0].y1C} r={6} />
                    <circle style={{display: 'none'}} fill="#fff0ce" cx={points[0].x} cy={points[0].y} r={6} />
                </g>
            );

            content.push(firstCurve);

            for (let i: number = 0; i < points.length - 1; i++) {
                const curve: React.ReactNode = (
                    <g>
                        <path fill="transparent" shapeRendering="geometricPrecision" stroke="red" strokeWidth="5"
                            d={
                            `M ${points[i].x}, ${points[i].y}
                            C ${points[i].x2C}, ${points[i].y2C} 
                              ${points[i + 1].x1C}, ${points[i + 1].y1C} 
                              ${points[i + 1].x}, ${points[i + 1].y}
                            M ${points[i].x}, ${points[i].y}
                            Z`
                            }
                        />
                        <circle style={{display: 'none'}} fill="#fff0ce" cx={points[i].x} cy={points[i].y} r={6} />
                        <circle style={{display: 'none'}} fill="#fff0ce" cx={points[i].x1C} cy={points[i].y1C} r={6} />
                        <circle style={{display: 'none'}} fill="#fff0ce" cx={points[i].x2C} cy={points[i].y2C} r={6} />
                    </g>
                );
    
                content.push(curve);
            }

            // compute last curve
            const lastCurve: React.ReactNode = (
                <g>
                    <path fill="transparent" shapeRendering="geometricPrecision" stroke="red" strokeWidth="5"
                        d={
                        `M ${points[points.length - 1].x}, ${points[points.length - 1].y}
                        C ${points[points.length - 1].x2C}, ${points[points.length - 1].y2C} 
                          ${endPoint.xC}, ${endPoint.yC} 
                          ${endPoint.x}, ${endPoint.y}
                        M ${points[points.length - 1].x}, ${points[points.length - 1].y}
                        Z`
                        }
                    />
                    <circle style={{display: 'none'}} fill="#fff0ce" cx={points[points.length - 1].x} cy={points[points.length - 1].y} r={6} />
                    <circle style={{display: 'none'}} fill="#fff0ce" cx={points[points.length - 1].x2C} cy={points[points.length - 1].y2C} r={6} />
                    <circle style={{display: 'none'}} fill="#fff0ce" cx={endPoint.xC} cy={endPoint.yC} r={6} />
                    <circle style={{display: 'none'}} fill="#fff0ce" cx={endPoint.x} cy={endPoint.y} r={6} />
                </g>
            );

            content.push(lastCurve);

        }

        return content;
    };

    return (
        <g>
            {mapPoints(points)}
        </g>
    )
}