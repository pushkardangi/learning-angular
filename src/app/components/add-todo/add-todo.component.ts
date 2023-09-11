import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title!: string;
  desc!: string;

  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();

  onSubmit() {
    const todo = {
      sno: 0,
      title: this.title,
      desc: this.desc,
      active: true,
    }
    if(this.title.trim() !== ''){
      this.addTodo.emit(todo);
    } else {
      alert('Please provide valid data');
    }
  }


}
