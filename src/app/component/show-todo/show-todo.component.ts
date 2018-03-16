import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { List } from '../../model/todos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-todo',
  templateUrl: './show-todo.component.html',
  styleUrls: ['./show-todo.component.css']
})
export class ShowTodoComponent implements OnInit {

  todos:List[];
  constructor(private todoList: TodoService, private router: Router) { }

  ngOnInit() {
   this.todoList.getTodos().subscribe(list => {
     console.log(list);
     this.todos = list;
    });
  }
  deleteTodo(event,todolist){
    this.todoList.deletTodo(todolist);
  }
  
  editTodo(event, todo){
    this.todoList.editTodo(todo);
  }

}
