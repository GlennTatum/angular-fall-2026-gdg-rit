import { Component } from '@angular/core';

type FruitItem = {
  name: string
  id: number
}

@Component({
  imports: [],
  selector: 'app-demo-control-flow',
  styleUrl: './demo-control-flow.css',
  templateUrl: './demo-control-flow.html',
})
export class DemoControlFlow {



  fruits: FruitItem[] = [
    {name: "orange", id: 100},
    {name: "strawberry", id: 200},
    {name: "apple", id: 300}
  ]
}
