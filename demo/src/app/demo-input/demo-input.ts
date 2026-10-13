import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-demo-input',
  styleUrl: './demo-input.css',
  templateUrl: './demo-input.html',
})
export class DemoInput {
  @Input() clsName: string = ''
}
