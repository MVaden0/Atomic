import React, { createContext, useContext, useReducer } from 'react'


const SETSELECTED = Symbol('SETSELECTED');


const canvasContextReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case SETSELECTED:
            return {
                ...state,
                selected: payload,
            }
        default:
            return state
    }
};


const CanvasContext = createContext();

export const useCanvasContext = () => useContext(CanvasContext);

export const CanvasContextProvider =  ({children}) => {
    const [context, contextDispatch] = useReducer(canvasContextReducer, {selected: true});

    return (
        <CanvasContext.Provider value={[context, contextDispatch]}>
            {children}
        </CanvasContext.Provider>
    )
}