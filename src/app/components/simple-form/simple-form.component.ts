import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent implements OnInit {
  @ViewChild('emailForm', { static: false }) emailForm: NgForm;

  email: string
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.email);
    console.log(this.emailForm.value);
  }

}
