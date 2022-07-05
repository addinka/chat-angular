import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/core/services/websocket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers: [WebsocketService]
})
export class ChatComponent  {


  text = '';
  received = [];
  sent = [];

  constructor(private WebsocketService: WebsocketService) {
    WebsocketService.messages.subscribe(message => {
      this.received.push(message);
      console.log('HELLO: ', this.received);
      console.log("Response from websocket: " + JSON.stringify(message));
      console.log("received val: " + JSON.stringify(this.received));
    });
  }

  ngAfterViewInit(){
   setTimeout( () => {
    this.sendToken();
   }, 5000)
 }
 
  sendMsg() {
    let message = {
      to: '',
      text: ''
    };

    message.to = 'ade';
    message.text = this.text;

    this.sent.push(message);
    this.WebsocketService.messages.next(JSON.stringify(message));
  }

  sendToken() {
    console.log("send token")
    this.WebsocketService.messages.next("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRlYW4uaGlkYXlhdEBpYm0tanRpLmNvbSIsInR5cGUiOiJSZWNydWl0ZXIiLCJuYW1lIjoiREVBTiBaQUtBIEhJREFZQVQiLCJwcm9mcGljIjoiL3JlY3J1aXRlci9wcm9mcGljLzEuZ2lmIiwiaXNBZG1pbiI6ZmFsc2UsImlzU3VwZXJBZG1pbiI6ZmFsc2UsImlzQWN0aXZlIjp0cnVlfQ.e7QP43Ya0BbOanuXOUo-Yo_5dlAKSYGHHd1Ym-ZqERY");
  }
}