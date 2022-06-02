import React, { useRef, useState } from 'react'
import style from '../../styles/canvas/toolbar/Section.module.css'


export const Section = ({ description, children }) => {
    const buttonRef = useRef(null);
    const contentRef = useRef(null);

    const [hidePanel, setHidePanel] = useState(false);

    const handleClick = (event) => {
        const content = contentRef.current;

        if (hidePanel) {
            content.style.height = "0";
        } else {
            content.style.height = "50px";
        }

        setHidePanel(!hidePanel);
    }

    return (
        <>
        <button ref={buttonRef} className={style.accordion} onClick={handleClick}>{description}</button>
        <div ref={contentRef} className={style.panel} >
            <div className={style.twoContainer}>
                {children}
            </div>
        </div>
        </>
    )
}