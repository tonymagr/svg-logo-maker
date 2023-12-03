const fs = require('fs');

function writeSvgFile (logoFile, svgContent) {

    fs.writeFile(logoFile, svgContent, (err) => {
        if (err) { 
            console.error(err);
        } else {
            // Do not log success if called by shapes.test to avoid logging async error
            if (logoFile === './examples/logo.svg') {
                console.log('Generated logo.svg');
            }
        }
        return err;
    });
}

module.exports = writeSvgFile;