const color = require('colors');

const Task = require('./task');


class Tasks {

    get getListAsArray() {
        const listAsArray = [];
        Object.keys(this._taskList).forEach(key => listAsArray.push(this._taskList[key]));
        return listAsArray;
    }

    constructor() {
        this._taskList = {};
    }

    createTask( desc ) {
        const task = new Task(desc);
        this._taskList[task.id] = task;
    }

    loadTasksFromArray( tasks = [])
    {
        if(tasks.length > 0) tasks.forEach( task => this._taskList[task.id] = task);      
    }

    showAllTasks(){
        this.getListAsArray.forEach((task, index) => {
            const textStatus = task.completedIn ? color.green('Completed') : color.red('Pending');
            console.log(`${color.green(index + 1)}. ${task.desc} :: ${textStatus}`);
        })
    }
}

module.exports = Tasks;