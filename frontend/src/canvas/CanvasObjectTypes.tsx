export interface Parameter {
    tag: string;
    value: number | string;
};

export interface Attribute {
    tag: string;
    parameters: Parameter[];
};

export enum ObjectType {
    CIRCLE = 'CIRCLE',
}

export interface CanvasObject {
    tag: string;
    title: string;
    type: ObjectType;
    attributes: Attribute[];
}

export interface Point {
    x: number;
    y: number;
}
