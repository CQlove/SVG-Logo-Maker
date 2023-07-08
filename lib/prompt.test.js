const inquirer = require('inquirer');
const { promptName, promptNameColor, promptShape, promptShapeColor } = require('./prompt.js');

jest.mock('inquirer');
describe('prompt input', () => {
    describe('promptName', () => {
        it('it should return same value that I input', async () => {
            const output = {
                promptName: 'CJX',
            };
            inquirer.prompt.mockResolvedValue(output);
            const newOutput = await promptName();

            expect(newOutput).toEqual(output);
        })
    })
})

describe('prompt input', () => {
    describe('promptName', () => {
        it('it should return same value that I input', async () => {
            const output = {
                promptNameColor: 'blue',
            };
            inquirer.prompt.mockResolvedValue(output);
            const newOutput = await promptNameColor();

            expect(newOutput).toEqual(output);
        })
    })
})


console.log('passed all tests!')