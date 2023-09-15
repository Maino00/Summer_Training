import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  parentData: string = "welcome to parent";

  fromChild: string = "Waiting for child Data";

  getChildData(e: any) {
    this.fromChild = e;
  }
}
