import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EproductdetailsComponent } from './eproductdetails.component';

describe('EproductdetailsComponent', () => {
  let component: EproductdetailsComponent;
  let fixture: ComponentFixture<EproductdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EproductdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EproductdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
