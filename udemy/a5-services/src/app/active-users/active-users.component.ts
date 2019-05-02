import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  //@Input() users: string[];
  users: { name: string; status: string; }[];
  @Output() userSetToInactive = new EventEmitter<number>();

  constructor(private usersSerivce: UsersService){  }

  ngOnInit() {
    this.users = this.usersSerivce.users;
  }
  onSetToInactive(id: number) {
    this.userSetToInactive.emit(id);
  }
}
