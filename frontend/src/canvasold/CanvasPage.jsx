import { useReducer, useContext, createContext } from 'react'

import style from '../styles/canvas/Canvas.module.css'

import { Toolbar } from '../canvas/toolbar/Toolbar';
import { Input } from '../canvas/toolbar/Input';
import { Section } from '../canvas/toolbar/Section';
import { Surface } from './objects/Surface'


// state-reducer
const canvasReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        default:
            return state
    };
};

// context
const CanvasContext = createContext();

// wrapper hook to access context
export const useCanvasContext = () => useContext(CanvasContext);

export const CanvasPage = ({backgroundColor}) => {
    const [canvasContext, canvasDispatch] = useReducer(canvasReducer, 
        { 
            objectSelected: false,
        }
    );

    return (
        <CanvasContext.Provider value={[canvasContext, canvasDispatch]}>
            <div
                className={style.pageContainer} 
                style={{width: window.innerWidth, height: window.innerHeight, backgroundColor: backgroundColor}} 
            >
                <Toolbar width={220} backgroundColor="#1a1a1a" >
                    <Section description='Dimensions'>
                        <Input name="x" color="#fff0ce" />
                    </Section>
                </Toolbar>
                <Surface backgroundCanvasRef={backgroundCanvasRef} state={state} showLines={false}>
                   
                </Surface>
                
            </div>
        </CanvasContext.Provider>  
    )
}
