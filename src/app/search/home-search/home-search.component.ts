import { WikipediaService } from './../wikipedia.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.scss']
})
export class HomeSearchComponent implements OnInit {

  pages = []
  isloading = false;
  noSearchResults = false;

  constructor(private wikipediaService: WikipediaService ) { }

  ngOnInit(): void {}

  onTerm(term: string){
    this.isloading = true;
    this.wikipediaService.search(term).subscribe((res)=>{
      this.isloading = false;
      this.pages = res;
      (res.length === 0)? this.noSearchResults = true : this.noSearchResults = false
    })
  }

}
