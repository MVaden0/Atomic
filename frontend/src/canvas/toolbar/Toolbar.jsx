import React, { useContext, useState } from 'react'
import style from '../../styles/canvas/toolbar/Toolbar.module.css'

import { useCanvasContext } from '../CanvasContextProvider';


export const Toolbar = ({width, backgroundColor, children}) => {
    const [name, setName] = useState("Canvas");

    const [context, contextDispatch] = useCanvasContext();

    alert(context.selected)

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