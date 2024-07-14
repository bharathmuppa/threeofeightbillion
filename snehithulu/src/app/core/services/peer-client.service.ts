import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeerClientService {

  constructor() { }

  peer:any;

  initializePeer(id:string){
    //@ts-ignore
    this.peer = new Peer(id, {
      host: 'localhost',
      port: 9000
    });
  }
  answerCallPeer(id: string){
   this.peer.on('call', (call: any)=> {
     // Answer the call, providing our mediaStream
    // call.answer(mediaStream);
   });
  }

  answerChatPeer(id: string){

  }
}
