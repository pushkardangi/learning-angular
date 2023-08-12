import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() todo!: Todo;

}
