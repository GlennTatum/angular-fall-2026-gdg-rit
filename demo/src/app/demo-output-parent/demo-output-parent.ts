import { Component } from '@angular/core';
import { DemoOutput } from '../demo-output/demo-output';

@Component({
  imports: [DemoOutput],
  selector: 'app-demo-output-parent',
  styleUrl: './demo-output-parent.css',
  templateUrl: './demo-output-parent.html',
})
export class DemoOutputParent {

  count: number

  constructor() {
    this.count = 0
  }

  changeEvent(event: number) {
    this.count = event;
  }
}
