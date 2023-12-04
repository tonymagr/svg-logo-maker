const getInput = require('./lib/userInput');
const writeSvgFile = require('./lib/writeFile');
const { Circle, Triangle, Square } = require('./lib/shapes');
const logoFile = './examples/logo.svg';

async function inputBuildWrite () {
    let shape;
    // Receive inputs
    let userInputs = await getInput();
    console.log('userInputs from index script', userInputs);

    // Build shapes
    if (userInputs.svgShape === 'circle') {
        shape = new Circle(userInputs.shapeColor, userInputs.svgText, userInputs.textColor);
    } else if (userInputs.svgShape === 'triangle') {
        shape = new Triangle(userInputs.shapeColor, userInputs.svgText, userInputs.textColor);
    } else {
        shape = new Square(userInputs.shapeColor, userInputs.svgText, userInputs.textColor);
    }

    // Create SVG file - write to file
    writeSvgFile(logoFile, shape.svgContent);
}

inputBuildWrite();
