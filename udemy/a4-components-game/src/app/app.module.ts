import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameControllerComponent } from './game-controller/game-controller.component';
import { OddDisplayComponent } from './displays/odd-display/odd-display.component';
import { EvenDisplayComponent } from './displays/even-display/even-display.component';


@NgModule({
  declarations: [
    AppComponent,
    GameControllerComponent,
    OddDisplayComponent,
    EvenDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
