import { Triangle, Circle, Square } from './shapes.js';
import { generateLogo } from '../index.js';

describe('Shapes', () => {
    describe('Triangle', () => {
        it('should generate the correct SVG code for a triangle', () => {
            const triangle = new Triangle('Triangle', 'blue', 'red');
            const expected = '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="80" style="fill:blue;stroke:black;stroke-width:1" /><text x="150" y="100" text-anchor="middle" dominant-baseline="central" fill="white" font-size="48">CJX</text></svg>';
            expect(triangle.draw()).to.equal(expected);
        });
    });


    // describe('generateLogo', () => {
    //     it('should generate a logo with the correct SVG code', () => {
    //       const name = new name('SVG')
    //     });
    //   });
});
console.log('All tests passed successfully!');