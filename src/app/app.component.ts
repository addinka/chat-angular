import { Component } from '@angular/core';
import { WebsocketService } from "./services/websocket.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [WebsocketService]
})

export class AppComponent {
  title = 'socketrv';
  text = '';
  received = [];
  sent = [];

  constructor(private WebsocketService: WebsocketService) {
    WebsocketService.messages.subscribe(msg => {
      this.received.push(msg);
      console.log("Response from websocket: " + msg);
    });
  }


  sendMsg() {
    let message = {
     // source: '',
      text: ''
    };
  //  message.source = 'ade';
    message.text = this.text;

    this.sent.push(message);
    this.WebsocketService.messages.next(message);
  }
}