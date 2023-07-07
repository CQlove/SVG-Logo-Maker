
import inquirer from "inquirer";
import fs from "fs";
// const fs = require("fs");
// const inquirer = require(`inquirer`);
// const { Triangle, Square, Circle } = require("./lib/shapes.js");
import { Triangle, Square, Circle } from "./lib/shapes.js";

function prompName() {
    return inquirer.prompt([
        {
            name: 'name',
            message: 'Please enter the name of your logo (3 characters or less):',
            validate: function (input) {
                if (input.length <= 3) {
                    return true;
                }
                return 'You can only enter 3 or less characters';
            },
        },
    ]);
}

function promptNameColor() {
    return inquirer.prompt([
        {
            name: 'nameColor',
            message: 'Enter the color code for the logo name( you can use keyword or hexadecimal number):',
        },
    ]);
}

function promptShape() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'shape',
            message: 'Please choose a follow shape:',
            choices: ['Circle', 'Triangle', 'Square'],
        },
    ]);
}

function promptShapeColor() {
    return inquirer.prompt([
        {
            name: 'shapeColor',
            message: 'Enter the shape color (keyword or hexadecimal number):',
        },
    ]);
}

function generateLogo(name, nameColor, shape, shapeColor) {
    let logoShape;

    if (shape === 'Circle') {
        logoShape = new Circle(name, nameColor, shapeColor);
    } else if (shape === 'Triangle') {
        logoShape = new Triangle(name, nameColor, shapeColor);
    } else if (shape === 'Square') {
        logoShape = new Square(name, nameColor, shapeColor);
    }

    const svgCode = logoShape.draw();
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