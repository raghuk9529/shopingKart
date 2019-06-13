import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensProductDetailsComponent } from './mens-product-details.component';

describe('MensProductDetailsComponent', () => {
  let component: MensProductDetailsComponent;
  let fixture: ComponentFixture<MensProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensProductDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
