require('colors');

const Tasks = require('./models/tasks');
const { saveFile, getFileInfo } = require('./helpers/fileService');

const { 
    inquirerMenuAsync, 
    pauseAsync, 
    readInputAsync 
} = require('./helpers/inquirerMenu');

const main = async () => {
    let answer = '';
    const tasks = new Tasks();

    const savedTasks = getFileInfo();

    tasks.loadTasksFromArray(savedTasks);

    do
    {
        answer =  await inquirerMenuAsync();

        switch(answer){
            case '1':
                const desc = await readInputAsync( 'Description: ' );
                tasks.createTask(desc);
                break;
            case '2':
                tasks.showAllTasks();
                break;
            case '3':
                break;
            case '4':
                break;
            case '5':
                break;
            case '6':
                break;
            case '0':
                break;
        }

        saveFile(tasks.getListAsArray);
        await pauseAsync();
    } while(answer !== '0')
}

main();