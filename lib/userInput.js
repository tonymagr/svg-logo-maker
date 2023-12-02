const inquirer = require('inquirer');
const colorExist = require('./findColor');

// CreditCredit https://www.geeksforgeeks.org/javascript-check-if-a-string-is-a-valid-hex-color-representation/
// Function to validate the hexadecimal color_code  
function isValidHexaCode (str) {
    // Regex to check valid hexadecimal color_code  
    let regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
    // if str is empty, return false
    if (!str) {
        return false;
    }
    // Return true if the str matched the regex
    if (regex.test(str)) {
        return true;
    } else {
        return false;
    }
}

async function getInput () {
    let userInputs = {};

    console.log('                                SVG LOGO MAKER\n');
    console.log('Produce your own SVG logos of three different shapes and text and color of your choice!\n');
    
    await inquirer
    .prompt ([
        {
            type: 'input',
            message: 'Text for SVG (maximum 3 characters):',
            name: 'svgText',
            validate: svgText => {
                if (!svgText) {
                    console.log('\nText for SVG missing - Please provide.');
                    return false;
                } else if (svgText.trim().length > 3) {
                    console.log('\nText for SVG must be 3 characters of less.');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: 'Text color (keyword or hexadecimal starting with #):',
            name: 'textColor',
            validate: textColor => {
                if (!textColor) {
                    console.log('\nText color missing - Please provide.');
                    return false;
                } else {
                    if (textColor.trim()[0] === '#') {
                        // Hex color entered
                        let validHexCode = isValidHexaCode(textColor.trim());
                        if (!validHexCode) {
                            console.log('\nInvalid hex color - please try again.');
                            return false;
                        } else {
                            return true;
                        }
                    } else {
                        // No #, so assume color keyword entered
                        let textColorLC = textColor.trim().toLowerCase();
                        let colorFound = colorExist(textColorLC);
                        if (colorFound < 0) {
                            console.log('\nText color not found - please try again.');
                            return false;
                        } else {
                            return true;
                        }
                    }
                }
            }
        },
        {
            type: 'list',
            message: 'Shape of SVG:',
            name: 'svgShape',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            message: 'Shape color (keyword or hexadecimal starting with #):',
            name: 'shapeColor',
            validate: shapeColor => {
                if (!shapeColor) {
                    console.log('\nShape color missing - Please provide.');
                    return false;
                } else {
                    if (shapeColor.trim()[0] === '#') {
                        // Hex color entered
                        let validHexCode = isValidHexaCode(shapeColor.trim());
                        if (!validHexCode) {
                            console.log('\nInvalid hex color - please try again.');
                            return false;
                        } else {
                            return true;
                        }
                    } else {
                        // No #, so assume color keyword entered
                        let shapeColorLC = shapeColor.trim().toLowerCase();
                        let colorFound = colorExist(shapeColorLC);
                        if (colorFound < 0) {
                            console.log('\nShape color not found - please try again.');
                            return false;
                        } else {
                            return true;
                        }
                    }
                }
            }
        }
    ])
    .then((response) => {
        if (response !== null) {
            userInputs = response;
        } else {
            console.log('No response');
        }
    });
    return userInputs;
}

module.exports = getInput;