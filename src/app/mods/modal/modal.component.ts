import { Component, OnInit, ElementRef, OnDestroy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit , OnDestroy{

  @Output() closeModal = new EventEmitter();

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.el.nativeElement.remove();
  }

  onCloseClick(){
    this.closeModal.emit();
  }

}
