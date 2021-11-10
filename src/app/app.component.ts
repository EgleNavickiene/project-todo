import { Component } from '@angular/core';
import { Task } from './interfaces/task';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-todo';

  public tasks: Task[] = [];

  constructor(private _taskService: TaskService) {
    
    this._taskService.getTasks()
    .subscribe((data: Task[]) => {
      this.tasks = data;
    });
  }

  toggleTask(task: Task) {
    //keicia true/false 
    task.completed = !task.completed;

    this._taskService.toggleTask(task)
    .subscribe((data: any) => {
      console.log(data);
    });
  }
}
