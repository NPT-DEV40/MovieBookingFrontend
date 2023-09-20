import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { ChatComponent } from 'src/app/features/chat/chat.component';
import { AuthService } from './auth.service';
import { UserService } from 'src/app/features/users/services/user.service';




@Injectable({
    providedIn: 'root'
})
export class WebsocketService {

    webSocketEndPoint: string = 'http://localhost:8080/ws';

    topic: string = "/topic/messages";
    stompClient: any;
    user?: String;
    authService!: AuthService;
    userService!: UserService; 
    constructor() {
    
    }

    _connect() {
        console.log("Initialize WebSocket Connection");
        this.user = this.authService.userValue?.username;
        let ws = new SockJS(this.webSocketEndPoint);
        this.stompClient = Stomp.over(ws);
        const _this = this;
        _this.stompClient.connect({}, function () {
            _this.stompClient.subscribe(_this.topic + "/" + _this.user, function (sdkEvent: any) {
                _this.onMessageReceived(sdkEvent);
            });
            //_this.stompClient.reconnect_delay = 2000;
        }, this.errorCallBack);
        // if (user) {
        //     _this.stompClient.connect({}, function () {
        //         _this.stompClient.subscribe(_this.topic + "/" + _this.user, function (sdkEvent: any) {
        //             _this.onMessageReceived(sdkEvent);
        //         });
        //         //_this.stompClient.reconnect_delay = 2000;
        //     }, this.errorCallBack);
        // } else if (admin) {
        //     const allUser = _this.userService.getAllUser;
        //        allUser.forEach(element => {
        //         const topic = "/topic/messages/" + element.username;
        //         _this.stompClient.connect({}, function () {
        //             _this.stompClient.subcribe(_this.topic + "/" + "admin", function (sdkEvent: any) {
        //                 _this.onMessageReceived(sdkEvent);
        //             });
        //         }); 
        //     });
        // }
    };

    _disconnect() {
        if (this.stompClient !== null) {
            this.stompClient.disconnect();
        }
        console.log("Disconnected");
    }

    // on error, schedule a reconnection attempt
    errorCallBack(error: string) {
        console.log("errorCallBack -> " + error)
        setTimeout(() => {
            this._connect();
        }, 5000);
    }

    _send(message: any) {
        console.log("calling logout api via web socket");
        this.stompClient.send("/app/send", {}, JSON.stringify(message));
    }

    onMessageReceived(message: string) {
        console.log("Message Recieved from Server :: " + message);
    }

}
