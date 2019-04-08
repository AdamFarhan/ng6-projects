import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit {
  @Input() element: {type: string, name: string, content: string};
  @Input() name: string;
  @ContentChild('contentParagraph') paragraph: ElementRef;
  //if you want to pass in the element as an alias
  //pass a string in the @Input
  //in HTML change [element]="e" to [<alias>]=""
  //@Input('srvElement') element: {type: string, name: string, content: string};


  constructor() {
    console.log("constructor() called");
   }

   ngOnChanges(changes: SimpleChanges) {
      console.log("ngOnChanges() called");
      console.log(changes);

   }

  ngOnInit() {
    console.log("ngOnInt() called")
  }

  ngDoCheck() {
    console.log("ngDoCheck() called");
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit() called");
  }
}
