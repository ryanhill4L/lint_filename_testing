const fs = require('fs');
const path = require('path');
const directoryPath = path.join(__dirname, '../migrations');

try {
    const files = fs.readdirSync(directoryPath).sort();

    console.log("====================");
    console.log("|  Check Sequence  |");
    console.log("====================");
    console.log(`ℹ️  Path:    '${directoryPath}'`);
    console.log("Checking sequence...");

    for (let i = 0; i < files.length; i++) {
        const expectedSequenceNumber = i + 1;
        const actualSequenceNumber = parseInt(files[i].slice(0, 5), 10);

        if (actualSequenceNumber !== expectedSequenceNumber) {
            console.log(`❌ Non-sequential filename: ${files[i]}`);
            console.log(`Expected sequence number: ${expectedSequenceNumber}, but got: ${actualSequenceNumber}`);
            console.log("Sequence check finished with errors.");
            process.exit(1);
        }

        console.log(`✔️  ${files[i]}`);
    }

    console.log("Sequence check finished.");
    console.log(`ℹ️  Files analyzed:  ${files.length}`);
    console.log("✅ Success: All filenames are sequential.");

} catch (err) {
    console.log('Unable to scan directory: ' + err);
    process.exit(1);
}
