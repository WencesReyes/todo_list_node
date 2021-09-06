require('colors');

const inquirerQuestions = [{
    type: 'list',
    name: 'option',
    message: 'What do you want to do?',
    choices: 
    [
        {
            name: `${'1'.green}. Create a task`, 
            value: '1'
        },
        { 
            name: `${'2'.green}. List tasks`,
            value: '2',
        }, 
        {
            name: `${'3'.green}. List completed tasks`,
            value: '3',
        },
        {
            name: `${'4'.green}. List pending tasks`,
            value: '4',
        },
        {
            name: `${'5'.green}. Complete a task`,
            value: '5',
        },      
        {
            name: `${'6'.green}. Delete a task`,
            value: '6',
        },
        {
            name: `${'0'.green}. Quit`,
            value: '0',
        },
    ],
}];

const inquirerInputPauseQuestions = [{
    type: 'input',
    name: 'pause',
    message: `Press ENTER to continue`,
}]

module.exports = {
    inquirerQuestions,
    inquirerInputPauseQuestions,
}