require('colors');
const inquirer = require('inquirer');

const { inquirerQuestions, inquirerInputPauseQuestions } = require('./constants');

const inquirerMenu = async () => {
    console.log('===================='.green);
    console.log(`   Pick an option   `.green);
    console.log('====================\n'.green);
    const { option } = await inquirer.prompt(inquirerQuestions);
    return option;
};

const pause = async () => await inquirer.prompt(inquirerInputPauseQuestions);

module.exports = {
    inquirerMenu,
    pause,
};