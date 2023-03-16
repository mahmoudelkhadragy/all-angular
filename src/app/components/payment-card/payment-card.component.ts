import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.scss']
})
export class PaymentCardComponent implements OnInit {

  cardForm = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.minLength(3),]),
    cardNumber: new FormControl(''),
    expiration: new FormControl(''),
    securityCode: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {}

  onSubmit(){
    console.log(this.cardForm.value);

  }

}
