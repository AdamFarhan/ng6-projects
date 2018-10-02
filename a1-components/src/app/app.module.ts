import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageWarningComponent } from './message-warning/message-warning.component';
import { MessageSuccessComponent } from './message-success/message-success.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    MessageWarningComponent,
    MessageSuccessComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
