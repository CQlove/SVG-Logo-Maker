const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shapes.js");
const { promptName, promptNameColor, promptShape, promptShapeColor } = require("./lib/prompt.js");



function generateLogo(name, nameColor, shape, shapeColor) {
    let logoShape;

    if (shape === 'Circle') {
        logoShape = new Circle(name, nameColor, shapeColor);
    } else if (shape === 'Triangle') {
        logoShape = new Triangle(name, nameColor, shapeColor);
    } else if (shape === 'Square') {
        logoShape = new Square(name, nameColor, shapeColor);
    }

    const svgCode = logoShape.render();
    fs.writeFileSync('logo.svg', svgCode);
    console.log('Success to create logo.svg!');
}

async function generate() {
    try {
        const { name } = await prompName();
        const { nameColor } = await promptNameColor();
        const { shape } = await promptShape();
        const { shapeColor } = await promptShapeColor();

        generateLogo(name, nameColor, shape, shapeColor);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

generate();