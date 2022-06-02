import React, { createContext, useReducer, FC } from 'react'


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

const CanvasContext = createContext<State | null>(null);

const canvasContextReducer = (state: State, action: Action) => {
    const { type, payload } = action;

    switch (type) {
        case ActionState.SETSELECTED:
            return {
                ...state,
                selected: action.payload,
            }
        default:
            return state
    }
};

interface Props {
    children?: React.ReactNode
}

export const CanvasContextProvider: FC<Props> =  ({children}) => {
  const [state, dispatch] = useReducer(canvasContextReducer, {selected: false});

  const value = {state, dispatch}

  return <CanvasContext.Provider value={value}>{children}</CanvasContext.Provider>
}