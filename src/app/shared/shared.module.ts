import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepeatElementDirective } from '../custom-directives/repeat-element.directive';
import { DividerComponent } from './components/divider/divider.component';
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [RepeatElementDirective, DividerComponent, TableComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    RepeatElementDirective,
    DividerComponent,
    TableComponent
  ]
})
export class SharedModule { }
