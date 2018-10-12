import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'a3-directives';
  items = [];

  addItem(){
    var tempItem = this.items.length + 1;
    this.items.push(tempItem);
  }
}
