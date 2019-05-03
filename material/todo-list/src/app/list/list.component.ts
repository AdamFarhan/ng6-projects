import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';
import { Task } from './task.model';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [ListService]
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'date'];
  taskList: Task[];
  constructor(private listService: ListService) { }

  ngOnInit() {
    this.taskList = this.listService.getTaskList();
  }

}
