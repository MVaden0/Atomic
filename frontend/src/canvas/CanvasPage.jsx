import { useReducer, useContext, createContext } from 'react'

import style from '../styles/canvas/Canvas.module.css'

import { Toolbar } from '../canvas/toolbar/Toolbar';
import { Input } from '../canvas/toolbar/Input';
import { Section } from '../canvas/toolbar/Section';
import { Surface } from './objects/Surface'

// actions for reducer
const Action = {
    EDIT: Symbol('EDIT'),
}

// state-reducer
const canvasReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case Action.EDIT:
            state.payload.attr = payload.value;

            return state
        default:
            return state
    };
};

// context
const CanvasContext = createContext();

export const useCanvasContext = () => useContext(CanvasContext);

export const CanvasPage = ({backgroundColor}) => {
    const [canvasContext, canvasDispatch] = useReducer(canvasReducer, 
        {
            global: {
                objectSelected: false,
            },
            page: {
                width: window.innerWidth,
                height: window.innerHeight,
                backgroundColor: '#1a1a1a',
            },
            toolbar: {
                width: 220,
                height: window.innerHeight,
                backgroundColor: '#1a1a1a',
                color: '#fff0ce',
            },
            surface: {
                top: (window.innerHeight - 800) / 2,
                left: (window.innerWidth - 220 - 800) / 2,
                width: 800,
                height: 800,
                backgroundColor: '#1a1a1a',
                foregroundColor: '#383838',
                selected: false,
            }
        }
    );

    return (
        <CanvasContext.Provider value={[canvasContext, canvasDispatch]}>
            <div
                className={style.pageContainer} 
                style={{
                    width: canvasContext.page.width, 
                    height: canvasContext.page.height, 
                    backgroundColor: canvasContext.page.backgroundColor
                }} 
            >
                <Toolbar 
                    width={canvasContext.toolbar.width} 
                    backgroundColor={canvasContext.toolbar.backgroundColor} 
                >
                    <Section 
                        description='Dimensions'
                    >
                        <Input 
                            name="x" 
                            color={canvasContext.toolbar.color} 
                        />
                    </Section>
                </Toolbar>
                <Surface>
                </Surface>
            </div>
        </CanvasContext.Provider>  
    );
};
