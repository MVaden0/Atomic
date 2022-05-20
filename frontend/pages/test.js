import style from '../styles/Test.module.css'


export default function Test() {
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
                <input type="text" placeholder="circle-0" />
                circle-0
            </div>
            <div className={style.testSubtitle}>
                Circle
            </div>
        </div>
        <div style={{ backgroundColor: '#1a1a1a', width: '70vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{ backgroundColor: '#9CC4B2', width: '950px', height: '700px', borderRadius: '2rem'}}>
            </div>
        </div>
    </div>
  );
}
