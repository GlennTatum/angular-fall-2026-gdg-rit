import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-demo-event-handler',
  styleUrl: './demo-event-handler.css',
  templateUrl: './demo-event-handler.html',
})
export class DemoEventHandler {

  // this demonstrates the components css scope and and event handler
  clsName: string;
  count: number;

  constructor() {
    this.clsName = "red"
    this.count = 0;
  }

  handlerFunc() {
    if(this.clsName === "red") {
      this.clsName = "blue"
    } else {
      this.clsName = "red"
    }
    this.count++;
  }
}
