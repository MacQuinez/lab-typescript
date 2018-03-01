// Iteration 1
// 1. Create an array of strings
// Defino la clase
var TasksList = /** @class */ (function () {
    // creo el constructor con la el array vacio donde voy a almacenar las tasks
    function TasksList() {
        this.tasks = [];
    }
    // 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
    //declaro la función y le paso como parámetro la tarea
    TasksList.prototype.addTask = function (newTask) {
        // le digo que liste el array y le añada un newTask
        this.tasks = this.tasks.concat([newTask]);
    };
    // 3. Create a function to list all tasks, it must show in the console de task.
    TasksList.prototype.listAllTasks = function () {
        console.log(this.tasks);
    };
    // 4. Create a function to delete a task, you must find the task inside the array and delete it.
    // declaro la función pasándole como parámetro la task que quiero eliminar 
    TasksList.prototype.deleteTask = function (newTask) {
        //le digo que filtre las tasks que sean distintas de la newTask
        this.tasks = this.tasks.filter(function (task) { return newTask !== task; });
    };
    return TasksList;
}());
//creo una Tasks List y la nombro
var myList = new TasksList();
// Execution
console.log("Number of items: " + myList.tasks.length, myList.addTask('This is our first task'));
console.log("Number of items: " + myList.tasks.length, myList.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items: " + myList.tasks.length, myList.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items: " + myList.tasks.length, myList.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items: " + myList.tasks.length, myList.addTask('Finish this iteration 3!! 🤓'));
myList.listAllTasks();
console.log("Number of items: " + myList.tasks.length, myList.deleteTask('Finish this iteration 1!! 🤓'));
myList.listAllTasks();
