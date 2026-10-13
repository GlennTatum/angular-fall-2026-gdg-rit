import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type CatResponse = {
  id: string,
  tags: string[],
  created_at: string,
  url: string,
  mimetype: string
}

@Injectable({
  providedIn: 'root',
})
export class DemoCatImage {

  constructor(private http: HttpClient) {

  }

  GetCat() {
    return this.http.get<CatResponse>('https://cataas.com/cat?json=true')
  }
}
