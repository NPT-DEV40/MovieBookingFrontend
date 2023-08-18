import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as SockJS from 'sockjs-client';
import { ChatComponent } from 'src/app/features/chat/chat.component';
import * as Stomp from 'stompjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  // socket: SockJS
  stompClient: any;
  topic: string = "/topic/greetings";
  webSocketEndPoint: string = "http://localhost:8080/chat";
  chatComponent!: ChatComponent;

  constructor(chatComponent: ChatComponent) {
    this.chatComponent = chatComponent;
  }

  _connect() {
    console.log("Initialize WebSocket Connection");
    let ws = SockJS(this.webSocketEndPoint);
    this.stompClient = Stomp.over(ws);
    const _this = this;
    _this.stompClient.connect({}, function (frame: any) {
      _this.stompClient.subscribe(_this.topic, function (sdkEvent: any) {
        _this.onMessageReceived(sdkEvent);
      });
    }, this.errorCallBack);
  };

  _disconnect() {
    if(this.stompClient !== null) {
      this.stompClient.disconnect();
    }
    console.log("Disconnected");
  }

  // on error, schedule a reconnection attempt
  errorCallBack(error: any) {
    console.log("errorCallBack -> " + error);
    setTimeout(() => {
      this._connect();
    }, 5000);
  }

  _send(message: any) {
    console.log("Calling logout api via web socket");
    this.stompClient.send("/app/greet", {}, JSON.stringify(message));
  }

  onMessageReceived(message: any) {
    console.log("Message received from Server :: " + message);
    this.chatComponent.handleMessage(JSON.parse(message));
  }
}
