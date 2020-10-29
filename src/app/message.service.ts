import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  // message缓存
   messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear(): void {
    this.messages = [];
  }

  constructor() {
  }
}
