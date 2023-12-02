const {Circle} = require('./shapes');
const Triangle = require('./shapes');
const Square = require('./shapes');

const compCirc1 =
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="yellow" />
    <text x="150" y="115" font-size="40" text-anchor="middle" fill="red">CIR</text>
</svg>`;

describe('Circle', () => {
  describe('svgContent', () => {
    it('should produce circle SVG', () => {
      let circleFunc = (shapeColor, svgText, textColor) => {
        const circle = new Circle(shapeColor, svgText, textColor);
        return circle.svgContent;
      }
      expect(circleFunc('yellow', 'CIR', 'red')).toEqual(compCirc1);
    });

  //   it('should produce circle SVG with blue shape color', () => {
  //     const circle = new Circle();
  //     let svgContent =
  // `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  //     <circle cx="150" cy="100" r="80" fill="blue" />
  //     <text x="150" y="115" font-size="40" text-anchor="middle" fill="red">BCR</text>
  // </svg>`;
  //       expect(circle('blue', 'BCR', 'white')).toEqual(svgContent);
  //   });
  });
});