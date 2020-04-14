import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject()

  constructor() { }

  sendMsg(msgObj) {
    this.subject.next(msgObj); //Triggering an event
  }

  getMsg() {
    return this.subject.asObservable() //Listener
  }
}
