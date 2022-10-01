import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  name: string;
  date: string;
  amount: number;
  height: number;
  mile: number;

  gender: string = 'male';
  inviteMap: any = {'male': 'Invite him.', 'female': 'Invite her.', 'other': 'Invite them.'};

  constructor() { }20

  ngOnInit(): void {
  }

  onNameChange(val){
    this.name = val;
  }

  onGenderChange(val){
    this.gender = val;
  }
  onDateChange(val){
    this.date = val;
  }
  onAmountChange(val){
    this.amount = parseFloat(val);
  }
  onHeightChange(val){
    this.height = parseFloat(val);
  }
  onMileChange(val){
    this.mile = parseFloat(val);
  }

}
