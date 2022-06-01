export interface BezierEndPoint {
    x: number;
    y: number;
    xC: number;
    yC: number;
}

export interface BezierMiddlePoint {
    x: number;
    y: number;
    x1C: number;
    y1C: number;
    x2C: number;
    y2C: number;
}

export interface BezierPoints {
    startPoint: BezierEndPoint;
    points: BezierMiddlePoint[];
    endPoint: BezierEndPoint;
}