import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  subtitle: string = 'To Do List';
  userInput: string = '';
  todolist: string[] = ['Breakfast', 'Shopping', 'dinner', 'Swimming', 'GYM'];

  todos: { text: string; showAdditionalText: boolean }[] = [
    { text: 'Task 1', showAdditionalText: false },
    { text: 'Task 1', showAdditionalText: false }

  ]

  toggleAdditionalText(index: number) {
    this.todos[index].showAdditionalText = !this.todos[index].showAdditionalText;
  }

  onSubmit(): void {
    console.log(this.userInput);
    this.todolist = this.todolist.concat(this.userInput);
  }

  onDelete(itemToDelete: string): void {
    this.todolist = this.todolist.filter((item) => item !== itemToDelete);
  }

  Display(item: string): void{
    
  }

}
