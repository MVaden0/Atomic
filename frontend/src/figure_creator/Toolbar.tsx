import React, {FC, useState, ChangeEvent} from 'react'
import style from '../styles/FigureCreator.module.css'

interface Props {
    width: number;
    height: number;
    backgroundColor: string;
}

export const Toolbar: FC<Props> = ({width, height, backgroundColor}) => {

    return (
        <div className={style.toolBar} style={{width: `${width}px`, backgroundColor: backgroundColor}}>
            
        </div>
    )
}