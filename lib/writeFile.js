const fs = require('fs');

function writeSvgFile (logoFile, svgContent) {

    fs.writeFile(logoFile, svgContent, (err) => {
        if (err) { 
            console.error(err);
        } else {
            // Do not log success or anything if called by shapes.test.js, to avoid async error logging here
            if (logoFile === './examples/logo.svg') {
                console.log('Generated logo.svg');
            }
        }
        return err;
    });
}

module.exports = writeSvgFile;