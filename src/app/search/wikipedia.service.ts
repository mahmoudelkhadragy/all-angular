import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor() { }

  search(term: string){
    return `here is from service ${term}`;
  }
}
