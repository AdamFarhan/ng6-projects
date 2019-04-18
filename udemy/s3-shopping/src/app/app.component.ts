import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedLocation = 'recipe';

  navigateTo(location: string){
    this.selectedLocation = location;
  }
}
