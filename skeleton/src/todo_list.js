const todos = JSON.parse(localStorage.getItem("todos")) || [];
// const todos = localStorage.getItem('todos', JSON.parse(todos))|| [];
const todoForm = document.querySelector(".add-todo-form");
const todoUl = document.querySelector(".todos")

console.log(todos);

// window.localStorage = localStorage;

function addTodo(event) {
    event.preventDefault();
    
    const values = document.querySelector("input[name='add-todo']").value
    const todoObj = {
        value: values,
        done: false
    }
    
    todos.push(todoObj);
    todoForm.reset();
    
    populateList([todoObj]);
    
    localStorage.setItem('todos', JSON.stringify(todos))
    // localStorage.clear();
}   



function populateList(todos) {
    let liTag = document.createElement('li');
    
    todos.forEach(todo => {
        let labelTag = document.createElement('label');
        labelTag.innerHTML = todo.value;

        let inputTag = document.createElement('input');
        inputTag.setAttribute('type', 'checkbox');
        inputTag.setAttribute('value', todo.done);

        let brTag = document.createElement('br');

        liTag.appendChild(labelTag);
        liTag.appendChild(inputTag);
        liTag.appendChild(brTag)
    });
    todoUl.appendChild(liTag);
}

function checked(event) {
    event.preventDefault();
    
    
    todos.forEach(obj => obj.done = true);
}


populateList(todos);

const submit = todoForm.addEventListener('submit', addTodo); 
// const checkd = todos.addEventListener('checkbox', checked);