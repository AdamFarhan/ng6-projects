import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  listOfEvens = [];
  listOfOdds = [];
  parseNumber(e: {newNumber: number}){
    if(e.newNumber % 2 == 0){
      this.listOfEvens.push(e.newNumber);
    }else{
      this.listOfOdds.push(e.newNumber);
    }
  }
}
