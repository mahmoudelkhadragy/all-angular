import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pass-generator',
  templateUrl: './pass-generator.component.html',
  styleUrls: ['./pass-generator.component.scss']
})
export class PassGeneratorComponent implements OnInit {
  length = 0
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  password = '';

  constructor() { }

  ngOnInit(): void {
  }

  onChangeLength(value: string){
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }

  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }
  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwyz';
    const symbols = '!@#$%^&*()';
    let generatedPassword = '';
    let validChars = '';

    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }

}
