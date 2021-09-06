const fs = require('fs');

const directory = './db/taskList.json';

const saveFile = ( data ) => {
    fs.writeFileSync(directory, JSON.stringify(data));
}

const getFileInfo = () => {
    if(!fs.existsSync(directory)) return [];

    const fileInfo = fs.readFileSync(directory, { encoding: 'utf-8' });

    return JSON.parse(fileInfo);
}

module.exports = {
    saveFile,
    getFileInfo,
};