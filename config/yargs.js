const description = {
    demand: true,
    alias: 'd',
    desc: 'Description of todo'
}

const complete = {
    default: true,
    alias: 'c',
    desc: 'Mark the task as completed or pending'
}

const argv = require('yargs')
    .command('create', 'Create a new to do', {
        description
    })
    .command('edit', 'Edit once todo', {
        description,
        complete
    })
    .command('list', 'list all todos')
    .command('delete', 'Delete once element of todos', {
        description
    })
    .help()
    .argv;

module.exports = {
    argv
}