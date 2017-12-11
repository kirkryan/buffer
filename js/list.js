var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do?");

while (input !== "quit") {

    if (input === "list") {
        listTodos();
    } else if (input === "new") {
        addTodo();
    } else if (input === "delete") {
        deleteTodo();
    }

    input = prompt("What would you like to do?");

}

console.log("OK, You have quit the app");


function listTodos() {
    console.log("*************");
    todos.forEach(function (todo, i) {
        console.log(i + ": " + todo);
    });
    console.log("*************");
    //list each item in the array on it's own line
}

function addTodo() {
    var newTodo = prompt("Enter a new Todo item");
    todos.push(newTodo);
    console.log("Added Todo");
}

function deleteTodo() {
    var indexToDelete = prompt("What number Todo would you like to delete?");
    console.log("Deleting item " + indexToDelete + " : " + todos[indexToDelete]);
    todos.splice(indexToDelete, 1);
}
