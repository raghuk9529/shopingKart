import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WProductDetailsComponent } from './w-product-details.component';

describe('WProductDetailsComponent', () => {
  let component: WProductDetailsComponent;
  let fixture: ComponentFixture<WProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WProductDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
