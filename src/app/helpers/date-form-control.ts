import { FormControl } from "@angular/forms";

export class DateFormControl extends FormControl {
  setValue(value: any, options?: { onlySelf?: boolean; emitEvent?: boolean; emitModelToViewChange?: boolean; emitViewToModelChange?: boolean; }): void {
    if(!value){
      super.setValue('' , {...options, emitModelToViewChange: true})
      return;
    }
    if(value.match(/[^0-9|\/]/gi)){
      super.setValue(this.value , {...options, emitModelToViewChange: true})
      return;
    }
    if(value.length > 5){
      super.setValue(this.value , {...options, emitModelToViewChange: true})
      return;
    }
    if(value.length === 2 && this.value[2] === '/' ){
      super.setValue(value, {...options, emitModelToViewChange: true})
      return;
    }
    if(value.length === 2){
      super.setValue(value + '/', {...options, emitModelToViewChange: true})
      return;
    }
    super.setValue(value, {...options, emitModelToViewChange: true})

  }
}
