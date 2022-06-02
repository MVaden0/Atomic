import { useState } from 'react'
import style from '../../styles/canvas/toolbar/Input.module.css'


export const Input = ({name, color}) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (value) => {
        if (value.match(/^[0-9]*\.?[0-9]*$/) != null) {
            setInputValue(value);
        };
    };

    return (
        <div className={style.container}>
            <label 
                style={{ color: color}}
                htmlFor={inputValue}>{name.toUpperCase()}
            </label>
            <input 
                style={{ color: color}}
                type="text" 
                name={name} 
                id={name} 
                value={inputValue}
                onChange={(e) => handleChange(e.target.value)} 
                spellCheck="false" 
                autoComplete='off'
            />
        </div>
    )
}