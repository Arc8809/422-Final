const fs = require('fs');
const path = require('path');
const { parse } = require('csv');

module.exports = {
    watched: null,
    output: null,
    processed: null,
    setWatched: function(watch) {
        this.watched = watch;
    },
    setOutput: function (out) {
        this.output = out;
    },
    setProcessed: function (proc) {
        this.processed = proc;
    },
    processChange: function (file) {
        if(file.endsWith('.csv')){
        const outputFile = path.resolve(this.output, path.basename(file).replace('.csv', '.json'));
        const processedFile = path.resolve(this.processed, path.basename(file));
        let rows = [];

        fs.createReadStream(file)
            .pipe(parse({
                columns: true,
                trim: true
            }))
            .on('data', (row) => {
                rows.push(row);
            })
            .on('end', () => {
                fs.rename(file, processedFile, (err) => {
                    if (err) {
                        console.warn('\x1b[38;2;255;165;0m%s\x1b[0m',"Error moving file to processed");
                         return; }
                   
                         console.info('moving ' ,file,' file to processed');
                    fs.writeFile(outputFile, JSON.stringify(rows, null, 2), (err) => {
                        if (err) { 
                            console.error('\x1b[38;2;255;165;0m%s\x1b[0m',"There was a problem creating Json file ", err); 
                            return; }
                        console.log("Created Json file", outputFile,"in outbound directory" )
                        
                        console.info('\x1b[38;2;0;0;170m%s\x1b[0m', `Parsed ${file}`);
                    });
                });
            })
            .on('error', (err) => {
                console.error("Error found: ",err)
                return false; });
    }else {
        console.log("file was not a csv")
        return false;
}
return true;}

};