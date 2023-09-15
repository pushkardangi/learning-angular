import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() toggleTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() editTodo:  EventEmitter<Todo> = new EventEmitter();

  handleDelete(todo: Todo){
    this.deleteTodo.emit(todo);
  }

  emitMarkAsDone(todo: Todo){
    this.toggleTodo.emit(todo);
  }

  handleEdit(todo: Todo){
    this.editTodo.emit(todo);
  }

}
