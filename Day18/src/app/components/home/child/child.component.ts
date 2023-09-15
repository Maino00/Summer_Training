import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() fromParent: string = "waiting for parent data";

  fromSecondChild: string = "Waiting for child Data";

  getSecondChildData(e: any) {
    this.fromSecondChild = e;
  }
}
