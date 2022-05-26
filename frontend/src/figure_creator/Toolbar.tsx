import React, {FC, useState, ChangeEvent} from 'react'
import style from '../styles/FigureCreator.module.css'

import { Input } from './Input';

import TextField from './TextField'

interface Props {
    width: number;
    height: number;
    backgroundColor: string;
}

export const Toolbar: FC<Props> = ({width, height, backgroundColor}) => {
    const [name, setName] = useState<string>("Canvas");

    const handleChange = (value: string) => {
        setName(value);
    }

    return (
        <div className={style.toolBar} style={{width: `${width}px`, backgroundColor: backgroundColor, borderRight: '1px solid #fff0ce'}}>
            <input
                className={style.testInput}
                type="text"
                value={name}
                onChange={(e) => handleChange(e.target.value)}
                spellCheck="false"
            />
            <div style={{
                fontFamily: 'Fira Code',
                fontSize: '1.25rem',
                color: '#f8edd6',
                padding: 0,
                marginLeft: '7px',
                textAlign: 'left',
                border: 'none',
            }}>
                Dimensions
            </div>
            <div className={style.gridContainer}>
                <Input name='x' color='#f8edd6' />
                <Input name='y' color='#f8edd6' />
                <Input name='x' color='#f8edd6' />
                <Input name='x' color='#f8edd6' />
                <Input name='x' color='#f8edd6' />
                <Input name='x' color='#f8edd6' />
                <Input name='x' color='#f8edd6' />
                <Input name='x' color='#f8edd6' />
            </div>
        </div>
    )
}