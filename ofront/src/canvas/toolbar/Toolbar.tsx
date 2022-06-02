import React, { FC, useState } from 'react'
import style from '../../styles/canvas/toolbar/Toolbar.module.css'

interface Props {
    width: number;
    backgroundColor: string;
    children: React.ReactNode;
}

export const Toolbar: FC<Props> = ({width, backgroundColor, children}) => {
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
            {children}
        </div>
    )
}