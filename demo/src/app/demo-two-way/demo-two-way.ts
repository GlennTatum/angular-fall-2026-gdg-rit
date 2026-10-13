import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DemoTwoWayChild } from '../demo-two-way-child/demo-two-way-child';

@Component({
  imports: [FormsModule, DemoTwoWayChild],
  selector: 'app-demo-two-way',
  styleUrl: './demo-two-way.css',
  templateUrl: './demo-two-way.html',
})
export class DemoTwoWay {

  textInput: string;
  items: string[]

  constructor() {
    this.textInput = ""
    this.items = []
  }
}
