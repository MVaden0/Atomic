import { useReducer, useContext } from 'react'
import style from '../styles/canvas/Canvas.module.css'


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

export default CanvasPage = ({backgroundColor}) => {
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
                
            </div>
        </CanvasContext.Provider>  
    )
}
