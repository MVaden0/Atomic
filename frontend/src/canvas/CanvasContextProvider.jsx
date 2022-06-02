import React, { createContext, useReducer } from 'react'


const canvasContextReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case ActionState.SETSELECTED:
            return {
                ...state,
                selected: payload,
            }
        default:
            return state
    }
};


export const CanvasContext = createContext(null);

export const CanvasContextProvider =  ({children}) => {
    const [context, contextDispatch] = useReducer(canvasContextReducer, {selected: false});

    return (
        <CanvasContext.Provider value={[context, contextDispatch]}>
            {children}
        </CanvasContext.Provider>
    )
}