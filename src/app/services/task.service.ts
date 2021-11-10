import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl: string = 'http://localhost:3000/tasks'
  
  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {

    let uri = this.apiUrl;

    return this.http.get<Task[]>(this.apiUrl);
  }

  toggleTask(task: Task) {

    let uri = this.apiUrl + "/" + task.id;
      console.log("1 budas: " + uri);

    let uri2 = `${this.apiUrl}/${task.id}`;
      console.log("2 budas: " + uri2);

      let body = {completed: task.completed};

      return this.http.patch(uri, body);
  }

  createTask(){

  }

  updateTask() {

  }

  deleteTask() {

  }
}
