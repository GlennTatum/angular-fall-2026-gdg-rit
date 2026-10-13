import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-demo-output',
  styleUrl: './demo-output.css',
  templateUrl: './demo-output.html',
})
export class DemoOutput {

  count: number;

  @Output() countChange = new EventEmitter<number>();

  constructor() {
    this.count = 0
  }

  countChangeEvent() {
    this.count++
    this.countChange.emit(this.count)
  }
}
