import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateFormControl } from 'src/app/helpers/date-form-control';

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.scss']
})
export class PaymentCardComponent implements OnInit {

  cardForm = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.minLength(3),]),
    cardNumber: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
    expiration: new DateFormControl('', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]),
    securityCode: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
  });

  constructor() { }

  ngOnInit(): void {}

  onSubmit(){
    console.log(this.cardForm.value);
  }
  onReset(){
    this.cardForm.reset();
  }

}
