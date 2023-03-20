import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MathValidator } from 'src/app/helpers/math-validator';
import { delay, filter, scan } from 'rxjs/operators';

@Component({
  selector: 'app-math-form',
  templateUrl: './math-form.component.html',
  styleUrls: ['./math-form.component.scss']
})
export class MathFormComponent implements OnInit {
  secondsPerSolution

  mathForm = new FormGroup({
    a: new FormControl(this.randomNumber()),
    b: new FormControl(this.randomNumber()),
    answer: new FormControl(''),
  },[MathValidator.addition('answer', 'a', 'b')])

  constructor() { }

  ngOnInit(): void {
    this.mathForm.statusChanges.pipe(
      filter(value => value === 'VALID'),
      delay(150),
      scan(acc =>{
        return {
          numberSolved: acc.numberSolved + 1,
          startTime: acc.startTime
        }
      }, {numberSolved: 0, startTime: new Date()})
      ).subscribe(({numberSolved, startTime})=>{
        this.secondsPerSolution = (new Date().getTime() - startTime.getTime()) / numberSolved / 1000;
        this.mathForm.setValue({
          a: this.randomNumber(),
          b: this.randomNumber(),
          answer: '',
        })
    })
  }

  get a(){
    return this.mathForm.value.a;
  }

  get b(){
    return this.mathForm.value.b;
  }
  randomNumber(){
    return Math.floor(Math.random() * 10);
  }


}
