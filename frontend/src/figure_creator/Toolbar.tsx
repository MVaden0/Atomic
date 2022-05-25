import React, {FC, useState, ChangeEvent} from 'react'
import style from '../styles/FigureCreator.module.css'

import TextField from './TextField'

interface Props {
    width: number;
    height: number;
    backgroundColor: string;
}

export const Toolbar: FC<Props> = ({width, height, backgroundColor}) => {
    const [name, setName] = useState<string>("circle");

    const handleChange = (value: string) => {
        setName(value);
    }

    return (
        <div className={style.toolBar} style={{width: `${width}px`, backgroundColor: backgroundColor}}>
            <input
                className={style.testInput}
                type="text"
                value={name}
                onChange={(e) => handleChange(e.target.value)}
                spellCheck="false"
            />
            <TextField name="x" color='#f8edd6' backgroundColor='#332F2E' />
        </div>
    )
}