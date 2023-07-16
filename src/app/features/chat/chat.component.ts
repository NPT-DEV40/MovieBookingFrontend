import { Component } from '@angular/core';
import { WebsocketService } from 'src/app/core/services/websocket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  message!: string;
  messages: string[] = [];

  constructor(private webSocketService: WebsocketService) { }

  ngOnInit() {
    this.webSocketService.connect();
    this.webSocketService.getMessage().subscribe((message: any) => {
      this.messages.push(message);
    });
  }

  ngOnDestroy() {
    this.webSocketService.disconnect();
  }

  sendMessage() {
    this.webSocketService.sendMessage(this.message);
    this.message = '';
  }
}
