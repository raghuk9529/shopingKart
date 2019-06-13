import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TproductdetailsComponent } from './tproductdetails.component';

describe('TproductdetailsComponent', () => {
  let component: TproductdetailsComponent;
  let fixture: ComponentFixture<TproductdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TproductdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TproductdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
