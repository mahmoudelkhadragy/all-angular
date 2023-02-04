import { Component, OnInit, Input } from '@angular/core';
import { Page } from 'src/app/models/page.model';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {

  @Input() pages: Page[] = [];
  headers = [
    { key: 'title', label: 'Title' },
    { key: 'wordcount', label: 'Word Count' },
    { key: 'snippet', label: 'Snippet' }
  ];

  constructor() { }

  ngOnInit(): void {}

}
