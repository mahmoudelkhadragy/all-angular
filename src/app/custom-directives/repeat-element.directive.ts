import { Directive, ViewContainerRef, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appRepeatElement]'
})
export class RepeatElementDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input('appRepeatElement') set render(times: number){
    this.viewContainer.clear();
    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        index: i
      })
    }
  }
}
