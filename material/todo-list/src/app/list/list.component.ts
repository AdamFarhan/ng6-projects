import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';
import { Task } from './task.model';
import {trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [ListService],
  animations:[
    trigger('fade', [
      state('void', style({ opacity: 0 })),

      transition('void => *', [
        animate(500)
      ]), 

      transition('* => void', [
        animate(500)
      ])

    ]),

    trigger('slideInOut', [
      state('void', style({
        maxHeight: '0px',
      })),
      transition(':enter, :leave', [
        animate('250ms ease-in-out')
      ])
    ])
  ]
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'date'];
  taskList: Task[];
  isInput: Boolean = false;
  inputTask: Task;
  constructor(private listService: ListService) { }

  ngOnInit() {
    //create initial task list
    this.taskList = this.listService.getTaskList();

    //subscribe to this event, so our array stays up to date
    this.listService.tasksUpdated.subscribe(
      (tasks: Task[]) => {
        this.taskList = tasks;
      })

  }

  toggleTask(id: number){
    this.listService.toggleTaskComplete(id);
  }

  editTask(editTask: Task, $e){
    $e.preventDefault();
    $e.stopImmediatePropagation();
    this.inputTask = editTask;
    this.isInput = !this.isInput;
  }
}
