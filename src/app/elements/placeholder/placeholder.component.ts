import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss']
})
export class PlaceholderComponent implements OnInit {

  @Input() header = false;
  @Input() lines = 2;

  constructor() { }

  ngOnInit(): void {
  }

  get linesArr(){
    return Array(this.lines)
  }

}
