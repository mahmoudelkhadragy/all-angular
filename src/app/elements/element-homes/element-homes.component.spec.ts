import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementHomesComponent } from './element-homes.component';

describe('ElementHomesComponent', () => {
  let component: ElementHomesComponent;
  let fixture: ComponentFixture<ElementHomesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementHomesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementHomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
