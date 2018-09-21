import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-list';

  todos: Todo[];
  
  selectedTodo: Todo;

  todo: Todo = {
    id: 1,
    name: 'Do Angular',
    contents: 'At this url'
  };

  onSelect(todo: Todo): void {
    this.selectedTodo = todo;
  }

  getTodos() {
    this.todos = this.todoService.getTodos();
  }

  ngOnInit(): void {
    this.getTodos();
  }

  constructor(private todoService: TodoService) { }
}