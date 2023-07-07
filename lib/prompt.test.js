const inquirer = require('inquirer');
const { promptName, promptNameColor, promptShape, promptShapeColor } = require('./prompt.js');

jest.mock('inquirer');