import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepeatElementDirective } from '../custom-directives/repeat-element.directive';
import { DividerComponent } from './components/divider/divider.component';
import { TableComponent } from './components/table/table.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [RepeatElementDirective, DividerComponent, TableComponent, InputComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RepeatElementDirective,
    DividerComponent,
    TableComponent,
    InputComponent
  ]
})
export class SharedModule { }
