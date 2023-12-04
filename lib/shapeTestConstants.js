// Test comparator constants which are entire SVG logo contents
const shapeConstants = {
    shapeCircle: 
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="yellow" />
    <text x="150" y="115" font-size="40" text-anchor="middle" fill="red">CIR</text>
</svg>`,
    colorTextCircle:
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="yellow" />
    <text x="150" y="115" font-size="40" text-anchor="middle" fill="green">CIR</text>
</svg>`,
    textCircle:
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="yellow" />
    <text x="150" y="115" font-size="40" text-anchor="middle" fill="red">TST</text>
</svg>`,
    colorCircle:
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="lightblue" />
    <text x="150" y="115" font-size="40" text-anchor="middle" fill="red">CIR</text>
</svg>`,
    hexColorCircle:
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="#3ab7bf" />
    <text x="150" y="115" font-size="40" text-anchor="middle" fill="red">CIR</text>
</svg>`,
    hexColorTextCircle:
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="yellow" />
    <text x="150" y="115" font-size="40" text-anchor="middle" fill="#000">CIR</text>
</svg>`,
    hexColorCircle2:
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="#fff" />
    <text x="150" y="115" font-size="40" text-anchor="middle" fill="red">CIR</text>
</svg>`,
    shapeTriangle: 
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,0 250,180 50,180" fill="yellow"/>
    <text x="150" y="130" font-size="40" text-anchor="middle" fill="red">TRI</text>
</svg>`,
    colorTextTriangle:
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,0 250,180 50,180" fill="yellow"/>
    <text x="150" y="130" font-size="40" text-anchor="middle" fill="green">TRI</text>
</svg>`,
    textTriangle:
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,0 250,180 50,180" fill="yellow"/>
    <text x="150" y="130" font-size="40" text-anchor="middle" fill="red">TST</text>
</svg>`,
    colorTriangle:
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,0 250,180 50,180" fill="lightblue"/>
    <text x="150" y="130" font-size="40" text-anchor="middle" fill="red">TRI</text>
</svg>`,
    hexColorTriangle:
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,0 250,180 50,180" fill="#3ab7bf"/>
    <text x="150" y="130" font-size="40" text-anchor="middle" fill="red">TRI</text>
</svg>`,
    hexColorTextTriangle:
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,0 250,180 50,180" fill="yellow"/>
    <text x="150" y="130" font-size="40" text-anchor="middle" fill="#000">TRI</text>
</svg>`,
    hexColorTriangle2:
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,0 250,180 50,180" fill="#fff"/>
    <text x="150" y="130" font-size="40" text-anchor="middle" fill="red">TRI</text>
</svg>`,
    shapeSquare:
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="77" y="22" width="146" height="146" fill="yellow" />
    <text x="150" y="110" font-size="40" text-anchor="middle" fill="red">SQR</text>
</svg>`,
    colorTextSquare:
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="77" y="22" width="146" height="146" fill="yellow" />
    <text x="150" y="110" font-size="40" text-anchor="middle" fill="green">SQR</text>
</svg>`,
    textSquare:
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="77" y="22" width="146" height="146" fill="yellow" />
    <text x="150" y="110" font-size="40" text-anchor="middle" fill="red">TST</text>
</svg>`,
    colorSquare:
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="77" y="22" width="146" height="146" fill="lightblue" />
    <text x="150" y="110" font-size="40" text-anchor="middle" fill="red">SQR</text>
</svg>`,
    hexColorSquare:
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="77" y="22" width="146" height="146" fill="#3ab7bf" />
    <text x="150" y="110" font-size="40" text-anchor="middle" fill="red">SQR</text>
</svg>`,
    hexColorTextSquare:
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="77" y="22" width="146" height="146" fill="yellow" />
    <text x="150" y="110" font-size="40" text-anchor="middle" fill="#000">SQR</text>
</svg>`,
    hexColorSquare2:
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="77" y="22" width="146" height="146" fill="#fff" />
    <text x="150" y="110" font-size="40" text-anchor="middle" fill="red">SQR</text>
</svg>`
}

module.exports = shapeConstants;