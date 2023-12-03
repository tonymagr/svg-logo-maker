// Did not place common properties in a parent class for these three classes to inherit because 
// each has a distinct property. (Normally there are multiple properties, but in this case only one 
// in each class with imbedded variables to accept passed parameter values.)

class Circle {
    constructor(shapeColor, svgText, textColor) {
        this.svgContent =
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
    <text x="150" y="115" font-size="40" text-anchor="middle" fill="${textColor}">${svgText}</text>
</svg>`;
    }
}

class Triangle {
    constructor(shapeColor, svgText, textColor) {
        this.svgContent =
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,0 250,180 50,180" fill="${shapeColor}"/>
    <text x="150" y="130" font-size="40" text-anchor="middle" fill="${textColor}">${svgText}</text>
</svg>`;
    }
}

class Square {
    constructor(shapeColor, svgText, textColor) {
        this.svgContent =
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="77" y="22" width="146" height="146" fill="${shapeColor}" />
    <text x="150" y="110" font-size="40" text-anchor="middle" fill="${textColor}">${svgText}</text>
</svg>`;
    }
}

module.exports = {
    Circle,
    Triangle,
    Square
};
