import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepeatElementDirective } from '../custom-directives/repeat-element.directive';
import { DividerComponent } from './components/divider/divider.component';



@NgModule({
  declarations: [RepeatElementDirective, DividerComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    RepeatElementDirective,
    DividerComponent
  ]
})
export class SharedModule { }
