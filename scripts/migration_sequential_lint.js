const fs = require('fs');
const path = require('path');
const directoryPath = path.join(__dirname, '../migrations');

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error('Unable to scan directory: ' + err);
        process.exit(1);
    }
    files.sort();
    console.log('Checking sequential filenames...');

    for (let i = 0; i < files.length; i++) {
        const expectedSequenceNumber = i + 1;
        const actualSequenceNumber = parseInt(files[i].slice(0, 5), 10);
        
        if (actualSequenceNumber !== expectedSequenceNumber) {
            console.error(`Non-sequential filename: ${files[i]}`);
            console.error(`Expected sequence number: ${expectedSequenceNumber}, but got: ${actualSequenceNumber}`);
            process.exit(1);
        }

        console.log(`${expectedSequenceNumber}: ${files[i]}`);
    }
    
    console.log('All filenames are sequential.');
});
