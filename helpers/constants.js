const inquirerQuestions = [{
    type: 'list',
    name: 'option',
    message: 'What do you want to do?',
    choices: [`1. Create a task`, `Opt2`, `Opt3`],
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