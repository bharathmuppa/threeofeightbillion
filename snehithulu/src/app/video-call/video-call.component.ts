import {Component, signal} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-video-call',
  templateUrl: './video-call.component.html',
  standalone: true,
  styleUrls: ['./video-call.component.scss'],
  imports: [NgIf]
})
export default class VideoCallComponent {


  peer:any;
  roomId = signal(null);

  constructor() {
  }

  startCall(){

  }

  connect() {
    //this.peer.connect(this.roomId);
  }

}
