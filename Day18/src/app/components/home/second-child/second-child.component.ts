import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css']
})
export class SecondChildComponent {
  data: string = "child Data";

  childData: string = "second child Data";

  @Output() myEvent: EventEmitter<any> = new EventEmitter();

  sendData() {
    this.myEvent.emit(this.data);
  }

  @Output() myEvent2: EventEmitter<any> = new EventEmitter();

  sendDataToChild() {
    this.myEvent2.emit(this.childData);
  }
}
