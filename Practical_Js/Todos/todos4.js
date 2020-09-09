var todoList = {
    todos: [],
    // The displayTodos method
    displayTodos: function() {       
        if (this.todos.length === 0){
            console.log('Your todo list is empty!'); // .displayTodos should show .todos is empty
        } else {
            console.log('My todos: ');
        // .displayTodos should show .todoText
            for (var i = 0; i < this.todos.length; i++) {
                if (this.todos[i].completed === true) {  // .displayTodos should show .completed
                    console.log('(x)', this.todos[i].todoText);
                } else {
                    console.log('( )', this.todos[i].todoText);
                }
                
            }
        }
        
    },
    // todoList.addTodo should add objects
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    // todoList.changeTodo should change the todoText property
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    //The deleteTodos method
    deleteTodo: function(position) {
        this.todos.splice(position,1);
        this.displayTodos();
    },

    //todoList.toggleCompleted to flip the completed property
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    },

    toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;

        // Get number of completed todos.
        for (var i = 0; i < totalTodos; i++) {
            if(this.todos[i].completed === true){
                completedTodos++;
            }
        }
        // Case 1: If everything's true, make everything false.
        if (completedTodos === totalTodos) {
            // Make everything false. 
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
        // Case 2: Otherwise, make everything true.    
        } else {
            for (var i = 0; i < totalTodos; i++){
                this.todos[i].completed = true;
            }
        }

        this.displayTodos();
    }
};
/*
// Access to the display todos button.
var displayTodosButton = document.getElementById('displayTodosButton');

// Access to the toggle button.
var toggleAllButton = document.getElementById('toggleAllButton');

// Run the displayTodos method when someone clicks the display todos button.
displayTodosButton.addEventListener('click', function() {
    todoList.displayTodos();
});

// Run the toggle method when someone clicks the toggle button.
toggleAllButton.addEventListener('click', function() {
    todoList.toggleAll();
});
*/

// REFACTORING
var handlers = {
    displayTodos: function() {
        todoList.displayTodos();
    },
    toggleAll: function() {
        todoList.toggleAll();
    },
    addTodo: function() {
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
    },
    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
    }
};
