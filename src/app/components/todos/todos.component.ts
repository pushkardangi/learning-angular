import { Component } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos: Todo[];
  localItem: string | null;
  editValues!: Todo;
  constructor() {
    this.localItem = localStorage.getItem('todos');
    if (this.localItem == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
  }

  handleDeleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  handleAddTodo(todo: Todo) {
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  handleMarkAsDone(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  handleEditTodoButton(todo: Todo){
    this.editValues = todo;
    console.log(todo);
  }

  handleEditTodo(todo: Todo){
    const editedTodo = this.todos.find((t) => {
      return t.sno == todo.sno;
    });
    if(editedTodo){
      editedTodo.title = todo.title;
      editedTodo.desc = todo.desc;
    }

    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
