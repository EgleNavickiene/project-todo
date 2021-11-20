import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from 'src/app/interfaces/task';
import { User } from 'src/app/interfaces/user';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss']
})
export class TaskCreateComponent implements OnInit {

  public task: Task = {
    title: "",
    completed: false,
    author: "",
    priority: "",
    user_id: 0
  };

  public priorties : string[] = ['low', 'medium', 'high'];

  public users: User[] = [];

  @Output() newItemEvent = new EventEmitter();

  constructor(
    private _taskService: TaskService,
    private _userService: UserService
    ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this._userService.getUsers().subscribe((data: any) => {
      this.users = data;
    })
  }

  taskCreate(form: NgForm) {
    //console.log(form);
    console.log(form.controls.author.invalid);

    if(form.valid) {
      this._taskService.createTask(this.task)
      .subscribe((data : any ) => {
        alert("Task succesfully added!");
        
        form.resetForm(); //ištuština formos laukelius
        this.newItemEvent.emit(data);
      });
    }else {
      alert("Check Your form-data, please");
    }

    
  }

}