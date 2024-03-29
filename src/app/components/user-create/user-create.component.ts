import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  public user: User = {
    name: "",
    email: "",
    // id?: number
  }

  @Output() newItemEvent = new EventEmitter();

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
  }

  userCreate() {
    console.log("create=user works: ");
    console.log(this.user);

    this._userService.createUser(this.user)
    .subscribe((data: any) =>{
      console.log("user created");
      console.log(data);
      
      this.newItemEvent.emit(data);
    })
  }

}
