import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd-display',
  templateUrl: './odd-display.component.html',
  styleUrls: ['./odd-display.component.css']
})
export class OddDisplayComponent implements OnInit {
  @Input() num:number;
  constructor() { }

  ngOnInit() {
  }

}
