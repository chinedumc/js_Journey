var todoList = {
    todos: [],
    /* No longer Needed as we are no longer displaying to the console
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
    */
    // todoList.addTodo should add objects
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        //this.displayTodos();
    },
    // todoList.changeTodo should change the todoText property
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        //this.displayTodos();
    },
    //The deleteTodos method
    deleteTodo: function(position) {
        this.todos.splice(position,1);
        //this.displayTodos();
    },

    //todoList.toggleCompleted to flip the completed property
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        //this.displayTodos();
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

        //this.displayTodos();
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
    /* No longer needed since we do not display on the console
    displayTodos: function() {
        todoList.displayTodos();
    },
    */
    addTodo: function() {
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
        view.displayTodos();
    },
    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
        view.displayTodos();
    },
    deleteTodo: function() {
        var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = '';
        view.displayTodos();
    },
    toggleCompleted: function() {
        var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = '';
        view.displayTodos();
    },
    toggleAll: function() {
        todoList.toggleAll();
        view.displayTodos();
    }
};

// Create an object to display the todo list
var view = {
    displayTodos: function(){
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';
        for (var i = 0; i < todoList.todos.length; i++) {
            var todoLi = document.createElement('li');
            //todoLi.textContent = todoList.todos[i].todotext; replaced by Ln148 // Display the todo text
            var todo = todoList.todos[i];
            var todoTextWithCompletion = '';

            if (todo.completed === true) {
                todoTextWithCompletion = '(x) ' + todo.todoText;
            } else {
                todoTextWithCompletion = '( ) ' + todo.todoText;
            }
            todoLi.textContent = todoTextWithCompletion;
            todosUl.appendChild(todoLi);
        }
    }
};

