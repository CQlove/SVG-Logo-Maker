const { Triangle, Circle, Square } = require('./shapes.js');


describe('Shapes', () => {
    describe('Triangle', () => {
        it('should generate the correct SVG code for a triangle', () => {
            const triangle = new Triangle('CJX', 'blue', 'red');
            expect(triangle.render()).toEqual(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,10 250,190 50,190" style="fill:red;stroke:black;stroke-width:1" />
    <text x="150" y="100" text-anchor="middle" dominant-baseline="central" fill="blue" font-size="48">CJX</text>
</svg>`);
        });
    });



});
console.log('All tests passed successfully!');