# SVG Logo Maker

## Author
Tony Magrady - Berkeley Full-Stack Web Development Bootcamp student, Fall-Winter Session 2023-2024

## Badges
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)


## Description

SVG Logo Maker is a Node.js command-line application that takes in user input to generate a logo and save it as an SVG file. The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file.
Testing of SVG shape rendering using Jest is also performed.


## Installation

Installed apps include Node (Javascript runtime), Jest (code testing), Inquirer (user input), and Fs (file access).

## Usage

Invocation on command line: "node index".
Prompts for text, text color, shape, and shape color.
SVG file is rendered and written to a SVG file (logo.svg).
User can see product SVG file in any browser by locating it in a file list and dragging the file object to the broswer window. The SVG image is displayed there.

[Demo Link](https://drive.google.com/file/d/15F4xnBTyBYSGpavrMsUESB5YyomiXGT0/view)

[SVG Logo Maker result](./img/logo.svg.jpg)


## Credits

Function to validate the hexadecimal color_code, using Regex
https://www.geeksforgeeks.org/javascript-check-if-a-string-is-a-valid-hex-color-representation/

## License

The MIT License

Copyright (c) (2023) (Tony Magrady)

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.