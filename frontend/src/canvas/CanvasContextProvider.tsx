import React, { createContext, useReducer, FC, useContext, Dispatch } from 'react'


enum ActionState {
    SETSELECTED = 'SETSELECTED',
}

interface Action {
    type: ActionState;
    payload: boolean;
}

interface State {
    selected: boolean;
}

const canvasContextReducer = (state: State, action: Action) => {
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

interface Props {
    children?: React.ReactNode
}

export const CanvasContext = createContext<(State | Dispatch<Action>)[] | null>(null);

export const CanvasContextProvider: FC<Props> =  ({children}) => {
    const [context, contextDispatch] = useReducer(canvasContextReducer, {selected: false});

    return (
        <CanvasContext.Provider value={[context, contextDispatch]}>
            {children}
        </CanvasContext.Provider>
    )
}