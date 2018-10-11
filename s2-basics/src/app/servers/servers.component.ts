import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: "servers.component.html",
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created."
  serverName = '';
  isServerCreated = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.isServerCreated = true;
    this.serverCreationStatus = "Server was created.";
  }

  onUpdateServerName(e) {
    this.serverName = e.target.value;
  }
}
