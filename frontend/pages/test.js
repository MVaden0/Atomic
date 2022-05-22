import style from '../styles/Test.module.css'
import { useRef, useEffect, useState} from 'react'

import TextField from '../components/TextField';


export default function Test() {
const [name, setName] = useState("circle");

    // We need to spread the previous state and change the one we're targeting, so other data cannot be lost.
    const handleChange = (value) => {
        setName(value);
    }

  return (
    <div style={{backgroundColor: '#1a1a1a', width: '100vw', height: '100vh', display: 'flex'}}>
        <div style={{ backgroundColor: '#1a1a1a', width: '200px', height: '100vh', borderRight: '1px solid #f8edd6'}}>
            <div className={style.testText}>
                GRID
            </div>
            <div className={style.testBody}>
                button
            </div>
            <div className={style.testText}>
                SHAPES
            </div>
            <div className={style.testBody}>
                button
            </div>
            <div className={style.testText}>
                ANIMATION
            </div>
            <div className={style.testBody}>
                button
            </div>
        </div>
        <div style={{ backgroundColor: '#1a1a1a', width: '200px', height: '100vh', borderRight: '1px solid #f8edd6'}}>
            <div className={style.testTitle}>
                <input
                    className={style.testInput}
                    type="text"
                    value={name}
                    onChange={(e) => handleChange(e.target.value)}
                    spellcheck="false"
                />
            </div>
            <div className={style.testSubtitle}>
                Circle
            </div>
            <div className={style.testGrid}>
                <TextField name="x" color='#f8edd6' backgroundColor='#332F2E' />
                <TextField name="y" color='#f8edd6' backgroundColor='#332F2E' />
                <TextField name="w" color='#f8edd6' backgroundColor='#332F2E' />
                <TextField name="h" color='#f8edd6' backgroundColor='#332F2E' />
            </div>

        </div>
        <div style={{ backgroundColor: '#1a1a1a', width: '70vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{ backgroundColor: '#9CC4B2', width: '950px', height: '700px', borderRadius: '2rem'}}>
            </div>
        </div>
    </div>
  );
}
