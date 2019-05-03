import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  taskList: Task[]  = [
      new Task(0, "Create angular material todo list", "05192019", false),
      new Task(1, "Create angular material todo list", "05192019", false),
      new Task(2, "Create angular material todo list", "05192019", false),
      new Task(3, "Create angular material todo list", "05192019", false),
      new Task(4, "Create angular material todo list", "05192019", false),
      new Task(5, "Create angular material todo list", "05192019", false),
  ]
  constructor() { }

  getTaskList(){
    return this.taskList.slice();
  }
}
