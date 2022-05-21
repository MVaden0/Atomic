import style from '../styles/Test.module.css'
import { useRef, useEffect, useState} from 'react'


export default function Test() {
const [name, setName] = useState("circle");

    // We need to spread the previous state and change the one we're targeting, so other data cannot be lost.
    const handleChange = (value) => {
        setName(value);
    }

  return (
    <div style={{backgroundColor: '#1a1a1a', width: '100vw', height: '100vh', display: 'flex'}}>
        <div style={{ backgroundColor: '#1a1a1a', width: '15vw', height: '100vh', borderRight: '1px solid #f8edd6'}}>
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
        <div style={{ backgroundColor: '#1a1a1a', width: '15vw', height: '100vh', borderRight: '1px solid #f8edd6'}}>
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
                <div>
                    <label style={{color: '#ffffff'}} htmlFor="x" >x</label>
                    <input style={{width: '45px'}} type="text" name="x" id="x"/>
                </div>
                
                <div>
                    <label style={{color: '#ffffff'}} htmlFor="y" >y</label>
                    <input style={{width: '45px'}} type="text" name="y" id="y"/>
                </div>
                
                <div>
                    <label style={{color: '#ffffff'}} htmlFor="w" >w</label>
                    <input style={{width: '45px'}} type="text" name="w" id="w"/>
                </div>

                <div>
                    <label style={{color: '#ffffff'}} htmlFor="h" >h</label>
                    <input style={{width: '45px'}} type="text" name="h" id="h"/>
                </div>
            </div>

        </div>
        <div style={{ backgroundColor: '#1a1a1a', width: '70vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{ backgroundColor: '#9CC4B2', width: '950px', height: '700px', borderRadius: '2rem'}}>
            </div>
        </div>
    </div>
  );
}
