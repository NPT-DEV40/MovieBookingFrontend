import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { WebsocketService } from 'src/app/core/services/websocket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  webSocketService!: WebsocketService;
  greeting: any;
  name!: string;
  
  ngOnInit(): void {
      this.webSocketService = new WebsocketService(new ChatComponent());
  }

  connect() {
    this.webSocketService._connect();
  }

  disconnect() {
    this.webSocketService._disconnect();
  }

  sendMessage() {
    this.webSocketService._send(this.name);
  }

  handleMessage(message: any) {
    this.greeting = message;
  }
}
