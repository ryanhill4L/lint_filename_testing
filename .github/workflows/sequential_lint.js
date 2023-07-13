const fs = require('fs');
const path = require('path');
const directoryPath = path.join(__dirname, '../migrations');

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error('Unable to scan directory: ' + err);
        process.exit(1);
    }
    files.sort();
    for (let i = 0; i < files.length; i++) {
        if (parseInt(files[i].slice(0, 5)) !== i + 1) {
            console.error(`Non-sequential filename: ${files[i]}`);
            process.exit(1);
        }
    }
});
