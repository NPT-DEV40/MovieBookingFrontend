import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor(private socket: Socket) {}

  connect() {
    this.socket.on('news', (data: any) => {
      this.handleMessage(data);
    });
  }

  disconnect() {
    this.socket.disconnect();
  }

  sendMessage(msg: string) {
    this.socket.emit('hello ', msg);
  }

  getMessage() {
    return this.socket.fromEvent('message');
  }

  handleMessage(data: any) {
    console.log("message: ", data);
  }

}
