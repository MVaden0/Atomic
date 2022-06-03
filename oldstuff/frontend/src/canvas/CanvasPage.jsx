import { useReducer, useContext, createContext } from 'react'

import style from '../styles/canvas/Canvas.module.css'

import { Toolbar } from '../canvas/toolbar/Toolbar';
import { Input } from '../canvas/toolbar/Input';
import { Section } from '../canvas/toolbar/Section';
import { Surface } from './objects/Surface'

// actions for reducer
export const Action = {
    EDIT: Symbol('EDIT'),
    TOGGLESELECTED: Symbol('TOGGLESELECTED'),
}

// state-reducer
const getAttr = (state, keys, val) => {
    let stateHistory = [state];

   for ( let i = 0; i < keys.length; i++) {
        const recursiveState = stateHistory[i][keys[i]];

        if (typeof recursiveState === 'object') {
            stateHistory.push(recursiveState)
        } else {
            return recursiveState;
        }
   }
};

const canvasReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case Action.EDIT:
            const keys = payload.keys;
            const val = payload.value;

            if (keys.length == 0) {
                state = state;
            } else
            if (keys.length == 1) {
                state[keys[0]] = val;
            } else
            if (keys.length == 2) {
                state[keys[0]][keys[1]] = val;
            }

            return state
        case Action.TOGGLESELECTED:
            state.global.objectSelected = payload.value;

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
                objectSelected: '',
                resizeOffset: 5
            },
            page: {
                tag: 'page',
                resizing: false,
                width: window.innerWidth,
                height: window.innerHeight,
                backgroundColor: '#1a1a1a',
            },
            toolbar: {
                tag: 'toolbar',
                resizing: false,
                width: 220,
                height: window.innerHeight,
                backgroundColor: '#1a1a1a',
                color: '#fff0ce',
            },
            surface: {
                tag: 'surface',
                resizing: false,
                top: (window.innerHeight - 800) / 2,
                left: (window.innerWidth - 220 - 800) / 2,
                width: 800,
                height: 800,
                minW: 100,
                minH: 100,
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
