const { rejects } = require('assert');
const fs = require('fs');

let todos = [];

const saveDB = () => {
    const data = JSON.stringify(todos);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error(err);
    })
}

const loadDB = () => {
    try {
        todos = require('../db/data.json');
    } catch (error) {
        todos = [];
    }
}

const create = (description) => {

    loadDB();

    const todo = {
        description,
        complete: false
    };
    todos.push(todo);
    saveDB();
    console.log(todo)
}

const getTodos = () => {
    loadDB();
    return todos;
}

const updateTodo = (description, complete = true) => {
    loadDB();
    let index = todos.findIndex(todo => todo.description === description);

    if (index >= 0) {
        todos[index].complete = complete;
        saveDB();
        return true
    } else {
        return false
    }

}

const deleteTodo = (description) => {
    loadDB();
    let index = todos.findIndex(todo => todo.description === description);

    if (index >= 0) {
        todos.splice(index, 1);
        saveDB();
        return true
    } else {
        return false
    }
}

module.exports = {
    create,
    getTodos,
    updateTodo,
    deleteTodo
}