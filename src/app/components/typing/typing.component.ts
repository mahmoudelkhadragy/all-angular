import { Component, OnInit } from '@angular/core';
import { lorem } from 'faker';
@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.scss'],
})
export class TypingComponent implements OnInit {
  randomText = lorem.sentence(5);
  defaultValue = '';
  isTypingMatch = false;
  disableInput = false;
  enteredText = '';
  constructor() {}

  ngOnInit(): void {}

  onInput(val) {
    this.enteredText = val;
    if (this.randomText === val) {
      this.isTypingMatch = true;
      this.disableInput = true;
    }
  }

  resetGame() {
    this.randomText = lorem.sentence(5);
    this.isTypingMatch = false;
    this.disableInput = false;
    this.defaultValue = ' ';
    this.enteredText = '';
    setTimeout(() => {
      this.defaultValue = '';
    }, 30);
  }

  compare(letter, val) {
    if (!val) {
      return '';
    }
    return letter === val ? 'correct' : 'wrong';
  }
}
