import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-demo-two-way-child',
  styleUrl: './demo-two-way-child.css',
  templateUrl: './demo-two-way-child.html',
})
export class DemoTwoWayChild {

  @Input() basket: string[] = [];
  @Output() basketChange = new EventEmitter<string[]>();

  addItem() {
    this.basket.push("item")
    this.basketChange.emit(this.basket)
  }

}
