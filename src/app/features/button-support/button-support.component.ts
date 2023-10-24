import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-support',
  templateUrl: './button-support.component.html',
  styleUrls: ['./button-support.component.css']
})
export class ButtonSupportComponent implements OnInit {
   // Nhận biến showChatBox từ component cha
   @Input() showChatBox?: boolean;

   constructor() { }
 
   ngOnInit(): void {
   }
 
   // Hàm để đổi giá trị của biến showChatBox
   toggleChatBox() {
     this.showChatBox = !this.showChatBox;
   }
}
