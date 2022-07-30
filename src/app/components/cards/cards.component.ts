import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  posts = [
    {
      title: 'title1',
      imageUrl: 'assets/images/tree.jpeg',
      username: '@nature',
      content: 'Saw this awesome tree during my hike today.'
    },
    {
      title: 'title2',
      username: '@nature',
      imageUrl: 'assets/images/mountain.jpeg',
      content: 'Saw this awesome tree during my hike today.'
    },
    {
      title: 'title3',
      username: '@nature',
      imageUrl: 'assets/images/biking.jpeg',
      content: 'Saw this awesome tree during my hike today.'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
