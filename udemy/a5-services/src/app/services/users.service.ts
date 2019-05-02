import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users = [
    {
      name: "Max",
      status: "active"
    },
    {
      name: "Anna",
      status: "active"
    },
    {
      name: "Chris",
      status: "inactive"
    },
    {
      name: "Manu",
      status: "inactive"
    }
  ];
  constructor() { }
}
