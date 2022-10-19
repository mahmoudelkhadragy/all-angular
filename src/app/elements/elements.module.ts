import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementHomesComponent } from './element-homes/element-homes.component';


@NgModule({
  declarations: [
    ElementHomesComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule
  ],
  exports: [
    ElementHomesComponent
  ]
})
export class ElementsModule { }
