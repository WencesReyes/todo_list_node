require('colors');
const inquirer = require('inquirer');

const { inquirerQuestions, inquirerInputPauseQuestions } = require('./constants');

const inquirerMenuAsync = async () => {
    console.log('===================='.green);
    console.log(`   Pick an option   `.green);
    console.log('====================\n'.green);
    const { option } = await inquirer.prompt(inquirerQuestions);
    return option;
};

const pauseAsync = async () => await inquirer.prompt(inquirerInputPauseQuestions);

const readInputAsync = async ( message ) => {
    const question = [{
        type: 'input',
        name: 'answer',
        message,
        validate( value )
        {
            if(value.length === 0) return "Please provide a description";
            
            return true;
        }
    }]

    const { answer } = await inquirer.prompt(question);
    return answer;
}

module.exports = {
    inquirerMenuAsync,
    pauseAsync,
    readInputAsync,
};