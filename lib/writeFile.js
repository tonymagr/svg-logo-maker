const fs = require('fs');

function writeSvgFile (logoFile, svgContent) {

    fs.writeFile(logoFile, svgContent, (err) => {
        if (err) { 
            console.error(err);
        } else {
            console.log('Generated logo.svg');
        }
        return err;
    });
}

module.exports = writeSvgFile;