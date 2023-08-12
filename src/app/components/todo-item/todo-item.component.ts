import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() todo!: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  handleDelete(todo: Todo){
    this.deleteTodo.emit(todo);
    console.log('Button clicked!');
  }

}
