require('colors');

const showMenu = () => {
    return new Promise((resolve, reject) => {
        try{
            console.clear();
            console.log('===================='.green);
            console.log(`   Pick an option   `.green);
            console.log('====================\n'.green);
        
            console.log(`${'1.'.green} Create a task`);
            console.log(`${'2.'.green} List tasks`);
            console.log(`${'3.'.green} List completed tasks`);
            console.log(`${'4.'.green} List pending tasks`);
            console.log(`${'5.'.green} Complete a task`);
            console.log(`${'6.'.green} Delete a task`);
            console.log(`${'0.'.green} Quit\n`);
        
            const readLine = require('readline').createInterface({
                input: process.stdin,
                output: process.stdout,
            });
        
            readLine.question('Pick and option:\n', opt => {
                resolve(opt);
                readLine.close();
            });
        } catch(ex)
        {
            reject(ex);
        }
    })
}

const pause = async () => {
    return new Promise((resolve, reject) => {
        try
        {
            const readLine = require('readline').createInterface({
                input: process.stdin,
                output: process.stdout,
            });
        
            readLine.question(`\nPress ${'ENTER'.green} to continue\n`, opt => {
                readLine.close();
                resolve();
            });
        } catch(ex)
        {
            reject(ex);
        }
    });
}

module.exports = {
    showMenu,
    pause
}