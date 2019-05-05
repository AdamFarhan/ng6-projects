import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task.model';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list-input',
  templateUrl: './list-input.component.html',
  styleUrls: ['./list-input.component.scss']
})
export class ListInputComponent implements OnInit {
  @Input() editTask: Task;
  newTaskName: string;

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.newTaskName = this.editTask.name
  }

  saveInput(){
    this.editTask.name = this.newTaskName;
    this.listService.updateTask(this.editTask.id, this.editTask);
  }
}
