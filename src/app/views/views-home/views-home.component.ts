import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.scss']
})
export class ViewsHomeComponent implements OnInit {
  states = [
    {value: 22, label: '# of Users'},
    {value: 356, label: 'Revenue'},
    {value: 887, label: 'Reviews'},
  ];

  items = [
    {
      imageUrl: 'https://media.istockphoto.com/id/890641852/photo/caucasian-young-man-going-straight-on-his-way-on-sandy-desert.jpg?s=612x612&w=0&k=20&c=lLYYETKZdTbBcsDB0vqOGuQ1rq6jBWBSYiiLk4fk5ak=',
      title: 'Man in the Nature',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
    },
    {
      imageUrl :'https://www.istockphoto.com/resources/images/PhotoFTLP/P4-JAN-iStock-1432854572.jpg',
      title: 'Boy Hero',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
