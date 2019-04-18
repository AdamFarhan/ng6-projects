import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.css']
})
export class GameControllerComponent implements OnInit {
  newNumber = 0;
  gameTimer;
  @Output() numberGenerated = new EventEmitter<{newNumber: number}>();

  constructor() { }

  ngOnInit() {
  }

  startGame(){
    this.gameTimer = setInterval(() => {
      this.newNumber++;
      this.numberGenerated.emit({
        newNumber: this.newNumber
      });
    }, 1000)
  }
  stopGame() {
    clearInterval(this.gameTimer);
  }
}
