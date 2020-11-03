const { argv } = require('./config/yargs'); // O const argv = require('yargs').argv
const { create, getTodos, updateTodo, deleteTodo } = require('./todo/todo')
var colors = require('colors');

let command = argv._[0];

switch (command) {
    case 'create':
        const todo = create(argv.description);
        break;
    case 'list':
        const todos = getTodos();
        for (const todo of todos) {
            console.log('============ TODO ============'.green);
            console.log(todo.description);
            console.log('State: ', todo.complete);
        }
        break;
    case 'edit':
        console.log('edit todo');
        const edit = updateTodo(argv.description, argv.complete);
        console.log(edit)
        break;
    case 'delete':
        const deleteItem = deleteTodo(argv.description);
        console.log(deleteItem);
        break;

    default:
        console.log('Invalid command');
        break;
}

console.log(argv)