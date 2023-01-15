import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementHomesComponent } from './element-homes/element-homes.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { RepeatElementDirective } from '../custom-directives/repeat-element.directive';
import { SharedModule } from '../shared/shared.module';
import { SegmentComponent } from './segment/segment.component';


@NgModule({
  declarations: [
    ElementHomesComponent,
    PlaceholderComponent,
    SegmentComponent,
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule
  ],
  exports: []
})
export class ElementsModule { }
