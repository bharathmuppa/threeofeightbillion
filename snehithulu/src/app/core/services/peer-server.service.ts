import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PeerServerService {


  peer: any;
  roomId$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }


  generatePeerId(){
    // @ts-ignore
    this.peer = new Peer({
      host: 'localhost',
      port: 9000
    });

    this.peer.on('open', (id:string)=> {
      console.log('My peer ID is: ' + id);
      this.roomId$.next(id);
    });

  }

  callPeer(id: string){

  }

  chatPeer(id: string){

  }
}
