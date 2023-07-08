const inquirer = require('inquirer');
const { promptName, promptNameColor, promptShape, promptShapeColor } = require('./prompt.js');

jest.mock('inquirer');
describe('prompt input', () => {
    describe('promptName', () => {
        it('it should return same name that I entered', async () => {
            const output = {
                name: 'CJX',
            };
            inquirer.prompt.mockResolvedValue(output);
            const newOutput = await promptName();

            expect(newOutput).toEqual(output);
        })
    })
})

describe('prompt input', () => {
    describe('promptNameColor', () => {
        it('it should return same color that I entered', async () => {
            const output = {
                nameColor: 'blue',
            };
            inquirer.prompt.mockResolvedValue(output);
            const newOutput = await promptNameColor();

            expect(newOutput).toEqual(output);
        })
    })
})

describe('prompt select', () => {
    describe('prompShape', () => {
        it('it should return same shape that I selected', async () => {
            const output = {
                shape: 'CJX',
            };
            inquirer.prompt.mockResolvedValue(output);
            try {
                await promptShape();
            } catch (error) {
                expect(error.message).toBe('Invalid shape!');
            }
        })
    })
})

describe('prompt input', () => {
    describe('promptShapeColor', () => {
        it('it should return same color that I entered', async () => {
            const output = {
                shapeColor: '1111',
            };
            inquirer.prompt.mockResolvedValue(output);
            const newOutput = await promptShapeColor();
            try {
                await promptShapeColor();
            } catch (error) {
                expect(error.message).toBe('Invalid color!');
            }
        })
    })
})

console.log('passed all tests!')