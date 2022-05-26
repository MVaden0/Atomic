import { FC, useState } from 'react'
import style from '../../styles/canvas/toolbar/Toolbar.module.css'

import { Section } from './Section';

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
            <Section description='Dimensions'/>
            <Section description='Grid'/>
            <Section description='Color'/>
            <Section description='Settings'/>
        </div>
    )
}