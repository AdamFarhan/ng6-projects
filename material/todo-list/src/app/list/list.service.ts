import { Injectable, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  taskList: Task[]  = [
      new Task(0, "Set up basic front end", "05192019", false),
      new Task(1, "Create an input field", "05192019", false),
      new Task(2, "Allow user to finish tasks", "05192019", false),
      new Task(3, "Add editing options", "05192019", false),
      new Task(4, "Add creating options", "05192019", false),
      new Task(5, "???", "05192019", false),
      new Task(6, "Profit?", "05192019", false),
  ]

  tasksUpdated = new EventEmitter<Task[]>();
  constructor() { }

  getTaskList(){
    return this.taskList.slice();
  }

  toggleTaskComplete(id: number){
    this.taskList[id].isDone = !this.taskList[id].isDone;
    this.tasksUpdated.emit(this.taskList.slice());
  }

  updateTask(id: number, newTask: Task){
    this.taskList[id] = newTask;
    this.tasksUpdated.emit(this.taskList.slice()); 
  }
}
