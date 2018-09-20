import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-list';
  todos = TODOS;
  selectedTodo: Todo;

  todo: Todo = {
    id: 1,
    name: 'Do Angular',
    contents: 'At this url'
  };

  onSelect(todo: Todo): void {
    this.selectedTodo = todo;
  }
}

const TODOS: Todo[] = [
  { id: 11, name: 'Wake up', contents: '' },
  { id: 12, name: 'Go RestRoom', contents: '' },
  { id: 13, name: 'Eat BreakFast', contents: ''}
];