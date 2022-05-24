import React, {FC, useState, ChangeEvent} from 'react'

interface Props {
    width: number;
    height: number;
    backgroundColor: string;
}

export const Toolbar: FC<Props> = ({width, height, backgroundColor}) => {

    return (
        <div style={{width: `${width}px`, height: `${height}px`, backgroundColor: backgroundColor}}>
          
        </div>
    )
}