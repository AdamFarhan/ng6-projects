import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even-display',
  templateUrl: './even-display.component.html',
  styleUrls: ['./even-display.component.css']
})
export class EvenDisplayComponent implements OnInit {
  @Input() num: number;
  constructor() { }

  ngOnInit() {
  }

}
