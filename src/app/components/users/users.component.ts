import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

   constructor(private _userService: UserService) { 
      this.getUsers()
     }

  ngOnInit(): void {
  }

  public users: User[] = [];

  public newUser: User = {
    'name': '',
    'email': ''
  }

  getUsers(){
    this._userService
    .getUsers()
    .subscribe((data: User[]) => {
      this.users = data;

      console.log(this.users)
    });
  }

  deleteUser(user: User) {
    alert("delete?");

    this._userService.deleteUser(user)
    .subscribe(data => {
      console.log("user deleted: ")
      console.log(data);

      this.getUsers();
    })
  }
}
