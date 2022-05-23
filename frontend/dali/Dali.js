class Dali {
    constructor(options) {
        this.options = options;

        this.allowedTypes = [
            'circle'
        ];
    };

    render(canvas, frameCount) {
        this.options.forEach((element) => {
            // shape options
            const type = element.type;
            const fill = element.fill || '#ffffff';
            const stroke = element.stroke || '#ffffff';
            const strokeWidth = element.strokeWidth || 0;
            const radius = element.radius || 10;
            const x = element.x || 10;
            const y = element.y || 10;
            const animated = element.animated || false;
        
            // check if type is allowed
            if (!this.allowedTypes.includes(type)) {
                throw new Error(`'${type}' is not an allowed type.`)
            };
        
            // static circle
            if (type === 'circle') {
                this.drawCircle(canvas, frameCount, x, y, radius, stroke, strokeWidth, fill)
            }
        });
    };

    drawCircle(canvas, framecount, x, y, radius, stroke, strokeWidth, fill) {
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute('cx', x)
        circle.setAttribute('cy', y)
        circle.setAttribute('r', radius)
        circle.setAttribute('stroke', stroke)
        circle.setAttribute('stroke-width', strokeWidth)
        circle.setAttribute('fill', fill)
        circle.addEventListener('click', (event) => {
            alert("saf")
        });
    
        canvas.appendChild(circle)

        

    }
};

export default Dali;