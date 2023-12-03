const {Circle} = require('./shapes');
const {Triangle} = require('./shapes');
const {Square} = require('./shapes');
const shapeConstants = require('./shapeTestConstants');
const writeSvgFile = require('./writeFile');
let svgTest;

describe('Circle', () => {
  describe('svgContent', () => {
    let render = (shapeColor, svgText, textColor) => {
      const circle = new Circle(shapeColor, svgText, textColor);
      return circle.svgContent;
    }

    // Just for first test, create file to demonstrate it creates a functional SVG file.
    // To try to create all SVG test files in Jest test.js script runs into async issues.
    svgTest = render('yellow', 'CIR', 'red');
    let logoFile = './examples/tests/logoShapeCircle.svg';
    writeSvgFile(logoFile, svgTest);
    // Perform test
    it('should render circle SVG', () => {
      expect(svgTest).toEqual(shapeConstants.shapeCircle);
    });

    it('should render SVG with green text', () => {
      expect(render('yellow', 'CIR', 'green')).toEqual(shapeConstants.colorTextCircle);
    });

    it('should render SVG with new text', () => {
      expect(render('yellow', 'TST', 'red')).toEqual(shapeConstants.textCircle);
    });

    it('should render SVG with light blue background', () => {
      expect(render('lightblue', 'CIR', 'red')).toEqual(shapeConstants.colorCircle);
    });

    it('should render SVG with TailwindCSS Tahiti background from hex code', () => {
      expect(render('#3ab7bf', 'CIR', 'red')).toEqual(shapeConstants.hexColorCircle);
    });

    it('should render SVG with black text from 3-digit hex code', () => {
      expect(render('yellow', 'CIR', '#000')).toEqual(shapeConstants.hexColorTextCircle);
    });

    it('compare invalid background hex color #ggg not.toEqual closest valid color #fff - invalid SVG', () => {
      expect(render('#ggg', 'CIR', 'red')).not.toEqual(shapeConstants.hexColorCircle2);
    });

  });
});