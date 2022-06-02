import { FC, useState, useCallback, useEffect, useRef, useReducer } from 'react'

import { ObjectBoundingRect } from './ObjectBoundingRect'
import { State } from '../Canvas'
import { Point } from'../CanvasObjectTypes'
import { computeCursorType, objectMouseDown } from './ObjectAPI'

import { ControlPoint } from './ControlPoint'

import { BezierEndPoint, BezierMiddlePoint, BezierPoints } from '../types'


export const Path = ({points}) => {
    const mapPoints = (bezierPoints) => {
        // content to be rendered
        const content = [];

        // points on the curve
        const startPoint = bezierPoints.startPoint;
        const points = bezierPoints.points;
        const endPoint = bezierPoints.endPoint;

        // check if middle points are present
        if (points.length < 1) {
            const curve = (
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
                    <ControlPoint point={{x: startPoint.x, y: startPoint.y}} color={'#fff0ce'} display={true} />
                    <ControlPoint point={{x: startPoint.xC, y: startPoint.yC}} color={'#fff0ce'} display={true} />
                    <ControlPoint point={{x: endPoint.xC, y: endPoint.yC}} color={'#fff0ce'} display={true} />
                    <ControlPoint point={{x: endPoint.x, y: endPoint.y}} color={'#fff0ce'} display={true} />
                </g>
            );

            content.push(curve);
        } else {
            // compute start curve
            const firstCurve = (
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
                    <ControlPoint point={{x: startPoint.x, y: startPoint.y}} color={'#fff0ce'} display={true} />
                    <ControlPoint point={{x: startPoint.xC, y: startPoint.yC}} color={'#fff0ce'} display={true} />
                    <ControlPoint point={{x: points[0].x1C, y: points[0].y1C}} color={'#fff0ce'} display={true} />
                    <ControlPoint point={{x: points[0].x, y: points[0].y}} color={'#fff0ce'} display={true} />
                </g>
            );

            content.push(firstCurve);

            for (let i = 0; i < points.length - 1; i++) {
                const curve = (
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
                        <ControlPoint point={{x: points[i].x, y: points[i].y}} color={'#fff0ce'} display={true} />
                        <ControlPoint point={{x: points[0].x1C, y: points[0].y1C}} color={'#fff0ce'} display={true} />
                        <ControlPoint point={{x: points[0].x2C, y: points[0].y2C}} color={'#fff0ce'} display={true} />
                    </g>
                );
    
                content.push(curve);
            }

            // compute last curve
            const lastCurve = (
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
                    <ControlPoint point={{x: points[points.length - 1].x, y: points[points.length - 1].y}} color={'#fff0ce'} display={true} />
                    <ControlPoint point={{x: points[points.length - 1].x2C, y: points[points.length - 1].y2C}} color={'#fff0ce'} display={true} />
                    <ControlPoint point={{x: endPoint.xC, y: endPoint.yC}} color={'#fff0ce'} display={true} />
                    <ControlPoint point={{x: endPoint.x, y: endPoint.y}} color={'#fff0ce'} display={true} />
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