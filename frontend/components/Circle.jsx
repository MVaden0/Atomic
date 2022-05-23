import React, {useRef, useEffect, useState} from 'react'

const Circle = (props) => {
    // props
    const { ...rest } = props;

    const selected = useRef(false);

    //
    const circleRef = useRef(null);

    const toggleSelected = () => {
        if (selected.current == true) {
            selected.current = false;
        } else {
            selected.current = true;
        };
    };
  
    useEffect(() => {
        const circle = circleRef.current;
        const parent = circle.parentElement;

        let line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.style.stroke = '#f8edd6';
        line.style.strokeWidth = 2;
        line.style.strokeDasharray = '5, 5';
        line.setAttribute('x1', 200);
        line.setAttribute('y1', 200);
        line.setAttribute('x2', 200);
        line.setAttribute('y2', 600);

        let line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line2.style.stroke = '#f8edd6';
        line2.style.strokeWidth = 2;
        line2.style.strokeDasharray = '5, 5';
        line2.setAttribute('x1', 600);
        line2.setAttribute('y1', 200);
        line2.setAttribute('x2', 600);
        line2.setAttribute('y2', 600);

        let line3 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line3.style.stroke = '#f8edd6';
        line3.style.strokeWidth = 2;
        line3.style.strokeDasharray = '5, 5';
        line3.setAttribute('x1', 200);
        line3.setAttribute('y1', 200);
        line3.setAttribute('x2', 600);
        line3.setAttribute('y2', 200);

        let line4 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line4.style.stroke = '#f8edd6';
        line4.style.strokeWidth = 2;
        line4.style.strokeDasharray = '5, 5';
        line4.setAttribute('x1', 200);
        line4.setAttribute('y1', 600);
        line4.setAttribute('x2', 600);
        line4.setAttribute('y2', 600);

        let circle1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle1.style.fill = '#f8edd6';
        circle1.setAttribute('cx', 200);
        circle1.setAttribute('cy', 200);
        circle1.setAttribute('r', 7.5);

        let circle2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle2.style.fill = '#f8edd6';
        circle2.setAttribute('cx', 200);
        circle2.setAttribute('cy', 600);
        circle2.setAttribute('r', 7.5);

        let circle3 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle3.style.fill = '#f8edd6';
        circle3.setAttribute('cx', 600);
        circle3.setAttribute('cy', 600);
        circle3.setAttribute('r', 7.5);

        let circle4 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle4.style.fill = '#f8edd6';
        circle4.setAttribute('cx', 600);
        circle4.setAttribute('cy', 200);
        circle4.setAttribute('r', 5);

        parent.appendChild(line);
        parent.appendChild(line2);
        parent.appendChild(line3);
        parent.appendChild(line4);

        parent.appendChild(circle1);
        parent.appendChild(circle2);
        parent.appendChild(circle3);
        parent.appendChild(circle4);

        line.style.display = 'none';
        line2.style.display = 'none';
        line3.style.display = 'none';
        line4.style.display = 'none';

        circle1.style.display = 'none';
        circle2.style.display = 'none';
        circle3.style.display = 'none';
        circle4.style.display = 'none';

        circle.addEventListener('click', (event) => {
            toggleSelected();

            if (selected.current) {
                line.style.display = 'block';
                line2.style.display = 'block';
                line3.style.display = 'block';
                line4.style.display = 'block';

                circle1.style.display = 'block';
                circle2.style.display = 'block';
                circle3.style.display = 'block';
                circle4.style.display = 'block';
            } else {
                line.style.display = 'none';
                line2.style.display = 'none';
                line3.style.display = 'none';
                line4.style.display = 'none';

                circle1.style.display = 'none';
                circle2.style.display = 'none';
                circle3.style.display = 'none';
                circle4.style.display = 'none';
            }
        })
    }, [])
  
    return (
        <ellipse ref={circleRef} cx='400' cy='400' rx='200' ry='100' stroke='#1a1a1a' strokeWidth='0' fill='#00ff00'/>
    );
}
  
export default Circle;
