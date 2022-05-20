class Dali {
    constructor(options) {
        this.options = options;

        this.allowedTypes = [
            'circle'
        ];
    };

    render(ctx, frameCount) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

        this.options.forEach((element) => {
            const type = element.type;
            const fillColor = element.fillColor || '#ffffff';
            const strokeColor = element.strokeColor || '#ffffff';
            const fill = element.fill || false;
            const stroke = element.stroke || false;
            const radius = element.radius || 10;
            const x = element.x || 10;
            const y = element.y || 10;
            const lineWidth = element.lineWidth || 2;
            const animated = element.animated || false;

            // check if type is in defined types
            if (!this.allowedTypes.includes(type)) {
                throw new Error(`'${type}' is not an allowed type.`)
            };

            // render circles
            if (type === 'circle') {
                if (fill == true) {
                    ctx.fillStyle = fillColor;
                    ctx.beginPath();
                    ctx.arc(x, y, radius, 0, 2*Math.PI)
                    ctx.fill()
                };
            
                if (stroke == true) {
                    ctx.strokeStyle = strokeColor;
                    ctx.lineWidth = lineWidth;
                    ctx.beginPath();
                    ctx.arc(x, y, radius, 0, 2*Math.PI);
                    ctx.stroke();
                };
            };
        });
    };
};

export default Dali;