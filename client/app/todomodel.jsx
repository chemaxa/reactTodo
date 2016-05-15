const todoModel = (function() {
    
    let todoList = [{
        id: 2,
        name: 'First Todo',
        description: 'Start with Angular',
        date: new Date(2015, 2, 1, 0, 0, 0, 0),
        completed: true
    }, {
        id: 1,
        name: 'Second Todo',
        description: 'Lets go controller with Angular',
        date: new Date(2015, 1, 1, 0, 0, 0, 0),
        completed: false
    },
    {
        id: 4,
        name: 'Fourth Todo',
        description: 'Lets go controller with Angular',
        date: new Date(2015, 1, 1, 0, 0, 0, 0),
        completed: false
    }, {
        id: 3,
        name: 'Third Todo',
        description: 'Testing with Angular',
        date: new Date(2015, 0, 1, 0, 0, 0, 0),
        completed: true
    }];

    let getTodo = function(id){
        return todoList[id];
    }

    return {
        todoList: todoList,
        getTodo: getTodo
    };
})();

export default todoModel;