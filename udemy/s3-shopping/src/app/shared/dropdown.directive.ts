import { Directive, HostListener, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  
  constructor(private elRef: ElementRef) { }
  @HostBinding('class.open') isOpen = false;
  @HostListener("click") onclick(){
    this.isOpen = !this.isOpen;
  }
}
