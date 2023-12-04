  const {Circle} = require('./shapes');
  const {Triangle} = require('./shapes');
  const {Square} = require('./shapes');
  const shapeConstants = require('./shapeTestConstants');
  const writeSvgFile = require('./writeFile');
  let svgTest, shapeSvg;
  
  let render = (shape, shapeColor, svgText, textColor) => {
    if (shape === 'circle') {
      shapeSvg = new Circle(shapeColor, svgText, textColor);
    } else if (shape === 'triangle') {
      shapeSvg = new Triangle(shapeColor, svgText, textColor); 
    } else {
      shapeSvg = new Square(shapeColor, svgText, textColor);  
    }
    return shapeSvg.svgContent;
  }
  
  describe('Circle', () => {
    describe('svgContent', () => {
      // Just for first test, writeFile to demonstrate it creates a functional SVG file.
      // To try to create all SVG test files in Jest test.js script runs into async issues.
      svgTest = render('circle','yellow', 'CIR', 'red');
      let logoFile = './examples/tests/logoShapeCircle.svg';
      writeSvgFile(logoFile, svgTest);
      // Perform test
      it('should render circle SVG', () => {
        expect(svgTest).toEqual(shapeConstants.shapeCircle);
      });
  
      it('should render SVG with green text', () => {
        expect(render('circle', 'yellow', 'CIR', 'green')).toEqual(shapeConstants.colorTextCircle);
      });
  
      it('should render SVG with new text', () => {
        expect(render('circle', 'yellow', 'TST', 'red')).toEqual(shapeConstants.textCircle);
      });
  
      it('should render SVG with light blue background', () => {
        expect(render('circle', 'lightblue', 'CIR', 'red')).toEqual(shapeConstants.colorCircle);
      });
  
      it('should render SVG with TailwindCSS Tahiti background from hex code', () => {
        expect(render('circle', '#3ab7bf', 'CIR', 'red')).toEqual(shapeConstants.hexColorCircle);
      });
  
      it('should render SVG with black text from 3-digit hex code', () => {
        expect(render('circle', 'yellow', 'CIR', '#000')).toEqual(shapeConstants.hexColorTextCircle);
      });
  
      it('compare invalid background hex color #ggg not.toEqual closest valid color #fff - invalid SVG', () => {
        expect(render('circle', '#ggg', 'CIR', 'red')).not.toEqual(shapeConstants.hexColorCircle2);
      });
    });
  });
  
  // Triangle and Square test suites are each a repeat of Circle test suite, other than they do not
  // create one SVG file, and they are rendering their respective shapes and shape text.
  describe('Triangle', () => {
    describe('svgContent', () => {
      it('should render triangle SVG', () => {
        expect(render('triangle', 'yellow', 'TRI', 'red')).toEqual(shapeConstants.shapeTriangle);
      });
  
      it('should render SVG with green text', () => {
        expect(render('triangle', 'yellow', 'TRI', 'green')).toEqual(shapeConstants.colorTextTriangle);
      });
  
      it('should render SVG with new text', () => {
        expect(render('triangle', 'yellow', 'TST', 'red')).toEqual(shapeConstants.textTriangle);
      });
  
      it('should render SVG with light blue background', () => {
        expect(render('triangle', 'lightblue', 'TRI', 'red')).toEqual(shapeConstants.colorTriangle);
      });
  
      it('should render SVG with TailwindCSS Tahiti background from hex code', () => {
        expect(render('triangle','#3ab7bf', 'TRI', 'red')).toEqual(shapeConstants.hexColorTriangle);
      });
  
      it('should render SVG with black text from 3-digit hex code', () => {
        expect(render('triangle', 'yellow', 'TRI', '#000')).toEqual(shapeConstants.hexColorTextTriangle);
      });
  
      it('compare invalid background hex color #ggg not.toEqual closest valid color #fff - invalid SVG', () => {
        expect(render('triangle', '#ggg', 'TRI', 'red')).not.toEqual(shapeConstants.hexColorTriangle2);
      });
    });
  });

  describe('Square', () => {
    describe('svgContent', () => {
      it('should render square SVG', () => {
        expect(render('square', 'yellow', 'SQR', 'red')).toEqual(shapeConstants.shapeSquare);
      });
  
      it('should render SVG with green text', () => {
        expect(render('square', 'yellow', 'SQR', 'green')).toEqual(shapeConstants.colorTextSquare);
      });
  
      it('should render SVG with new text', () => {
        expect(render('square', 'yellow', 'TST', 'red')).toEqual(shapeConstants.textSquare);
      });
  
      it('should render SVG with light blue background', () => {
        expect(render('square', 'lightblue', 'SQR', 'red')).toEqual(shapeConstants.colorSquare);
      });
  
      it('should render SVG with TailwindCSS Tahiti background from hex code', () => {
        expect(render('square','#3ab7bf', 'SQR', 'red')).toEqual(shapeConstants.hexColorSquare);
      });
  
      it('should render SVG with black text from 3-digit hex code', () => {
        expect(render('square', 'yellow', 'SQR', '#000')).toEqual(shapeConstants.hexColorTextSquare);
      });
  
      it('compare invalid background hex color #ggg not.toEqual closest valid color #fff - invalid SVG', () => {
        expect(render('square', '#ggg', 'SQR', 'red')).not.toEqual(shapeConstants.hexColorSquare2);
      });
    });
  });