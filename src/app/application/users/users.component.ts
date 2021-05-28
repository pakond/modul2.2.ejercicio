import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: IUser[];
  public selectedUser: IUser;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.users = this.usersService.getUsers();
  }

  goToDetails(i: number) {
    console.log(i);
    this.selectedUser = this.usersService.getUsersById(i);
  }

}
