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

export interface Object {
    tag: string;
    title: string;
    type: ObjectType;
    attributes: Attribute[];
}
