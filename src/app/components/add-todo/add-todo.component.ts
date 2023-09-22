import { Component, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  @Input() value?: Todo;

  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() editTodo: EventEmitter<Todo> = new EventEmitter();

  title!: string;
  desc!: string;


  onSubmit(todoForm: NgForm) {
    const todo = {
      sno: new Date().getTime(),
      title: this.title,
      desc: this.desc,
      active: true,
    }
    
    if(this.title){
      if(this.title.trim() !== ''){
        this.addTodo.emit(todo);
        todoForm.reset();
      } else {
        alert('Please provide valid Title');
      }
    } else {
      alert('Title is mandatory');
    }
  }

  onEdit(){
    console.log("Edit Request");
    if(this.value){
      const todo = {
        sno: this.value.sno,
        title: this.title ?? this.value.title,
        desc: this.desc ?? this.value.desc,
        active: true,
      }
      this.editTodo.emit(todo);
      this.clearInput();
    }

  }

  clearInput(){
    window.location.reload();
  }
  
}
