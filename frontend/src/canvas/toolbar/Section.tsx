import { FC, useRef, useState } from 'react'
import style from '../../styles/canvas/toolbar/Section.module.css'

import { Input } from './Input'

interface Props {
  description: string;
}

export const Section: FC<Props> = ({description}) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const [hidePanel, setHidePanel] = useState<boolean>(false);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const content: HTMLDivElement = contentRef.current as HTMLDivElement;

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
                <Input name='x' color='#f8edd6' />
                <Input name='y' color='#f8edd6' />
            </div>
        </div>
        </>
    )
}