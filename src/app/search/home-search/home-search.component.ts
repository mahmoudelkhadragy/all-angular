import { WikipediaService } from './../wikipedia.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.scss']
})
export class HomeSearchComponent implements OnInit {

  constructor(private wikipediaService: WikipediaService ) { }

  ngOnInit(): void {
  }

  onTerm(term: string){
    const result = this.wikipediaService.search(term);
    console.log(result);

  }

}
