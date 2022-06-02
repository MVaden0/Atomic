import React, { useState } from 'react'
import style from '../../styles/canvas/toolbar/Toolbar.module.css'


export const Toolbar = ({width, backgroundColor, children}) => {
    const [name, setName] = useState("Canvas");

    const handleChange = (value) => {
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