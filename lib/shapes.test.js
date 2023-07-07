const { Triangle, Circle, Square } = require('./shapes.js');


describe('Shapes', () => {
    describe('Triangle', () => {
        it('should generate the blue CJX for a red triangle', () => {
            const triangle = new Triangle('CJX', 'blue', 'red');
            expect(triangle.render()).toEqual(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,10 250,190 50,190" style="fill:red;stroke:black;stroke-width:1" />
    <text x="150" y="110" text-anchor="middle" dominant-baseline="central" fill="blue" font-size="48">CJX</text>
</svg>`);
        });
    });

    describe('Circle', () => {
        it('should generate the black AAA for a white circle', () => {
            const circle = new Circle('AAA', 'black', 'white');
            expect(circle.render()).toEqual(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" style="fill:white;stroke:black;stroke-width:1" />
    <text x="150" y="97.5" text-anchor="middle" dominant-baseline="central" fill="black" font-size="48">AAA</text>
</svg>`);
        });
    });

    describe('Square', () => {
        it('should generate the red USA for a blue square', () => {
            const square = new Square('USA', 'red', 'blue');
            expect(square.render()).toEqual(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="50" width="200" height="100" style="fill:blue;stroke:black;stroke-width:1" />
    <text x="150" y="100" text-anchor="middle" dominant-baseline="central" fill="red" font-size="48">USA</text>
</svg>`);
        });
    });


});
console.log('All tests passed successfully!');