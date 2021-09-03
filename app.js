require('colors');

const { inquirerMenu, pause } = require('./helpers/inquirerMenu');

const main = async () => {
    let answer = '';
    do
    {
        answer =  await inquirerMenu();
        console.log(answer);

    } while(answer !== '0')
}

main();