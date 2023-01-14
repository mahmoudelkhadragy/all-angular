import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepeatElementDirective } from '../custom-directives/repeat-element.directive';



@NgModule({
  declarations: [RepeatElementDirective],
  imports: [
    CommonModule,
  ],
  exports: [
    RepeatElementDirective
  ]
})
export class SharedModule { }
