import { Component } from '@angular/core';
import { DemoInput } from '../demo-input/demo-input';

@Component({
  imports: [DemoInput],
  selector: 'app-demo-input-parent',
  styleUrl: './demo-input-parent.css',
  templateUrl: './demo-input-parent.html',
})
export class DemoInputParent {

  childColor: string;

  constructor() {
    this.childColor = "purple"
  }

  changeColor() {
    if(this.childColor === "purple") {
      this.childColor = "green"
    } else {
      this.childColor = "purple"
    }
  }
}
