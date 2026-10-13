import { Component, OnInit, signal } from '@angular/core';
import { CatResponse, DemoCatImage } from '../demo-cat-image/demo-cat-image';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  imports: [AsyncPipe],
  selector: 'app-demo-cat-component',
  styleUrl: './demo-cat-component.css',
  templateUrl: './demo-cat-component.html',
})
export class DemoCatComponent implements OnInit {

  // cat: Observable<CatResponse> | null

  cat = signal<string>('')

  constructor(private catService: DemoCatImage) {
  }

  ngOnInit(): void {
    this.catService.GetCat().subscribe(cat => this.cat.set(cat.url))
  }
}
