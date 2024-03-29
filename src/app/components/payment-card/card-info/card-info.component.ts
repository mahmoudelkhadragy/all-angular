import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit {

  @Input() cardNumber: string;
  @Input() name: string;
  @Input() expiration: string;

  constructor() { }

  ngOnInit(): void {
  }

}
