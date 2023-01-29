import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  @Input() items = []
  @Input() openedItemIndex = 0

  constructor() { }

  ngOnInit(): void {}

  toggleAccordion(index){
    if(this.openedItemIndex == index){
      this.openedItemIndex = -1;
    }else{
      this.openedItemIndex = index
    }
  }

}
