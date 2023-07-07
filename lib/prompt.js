const inquirer = require(`inquirer`);

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


module.exports = {
    prompName,
    promptNameColor,
    promptShape,
    promptShapeColor
};