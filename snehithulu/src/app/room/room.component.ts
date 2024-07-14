
import {Component, inject, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkActive, RouterLinkWithHref} from "@angular/router";


@Component({
  selector: 'app-room',
  standalone: true,
  imports: [CommonModule, RouterLinkActive,RouterLinkWithHref],
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export default class RoomComponent implements OnInit{
  peer:any;

  @Input('id')
  roomId?: string;

  constructor() {

  }

  ngOnInit() {
    // @ts-ignore
    this.peer = new Peer(this.roomId, {
      host: 'localhost',
      port: 9000
    });

  }

  connect(){
    // @ts-ignore
    const getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;


    getUserMedia({video: true, audio: true}, (stream:any)=> {
      // @ts-ignore
      const call = this.peer.call(this.roomId, stream);
      call.on('stream', function(remoteStream:any) {
        // Show stream in some video/canvas element.

      });
    }, (err:any)=> {
      console.log('Failed to get local stream' ,err);
    });
  }

  answerCall(){
    // @ts-ignore
    let getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    this.peer.on('call', (call:any)=> {
      getUserMedia({video: true, audio: true}, (stream:any) =>{
        call.answer(stream); // Answer the call with an A/V stream.
        call.on('stream', (remoteStream:any)=> {
          // Show stream in some video/canvas element.
        });
      }, (err:any)=> {
        console.log('Failed to get local stream' ,err);
      });
    });
  }

}
