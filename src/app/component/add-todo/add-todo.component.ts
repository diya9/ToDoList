import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { List } from '../../model/todos';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  newTodo: List= {
    title: ''
  }

  editForm: boolean = false;
    
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  addItem(){
    if(this.newTodo.title != ''){
      this.todoService.addTodo(this.newTodo);
      this.newTodo.title = '';
    }
  }
}
