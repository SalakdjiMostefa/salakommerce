import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartNumberComponent } from './cart-number.component';

describe('CartNumberComponent', () => {
  let component: CartNumberComponent;
  let fixture: ComponentFixture<CartNumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartNumberComponent]
    });
    fixture = TestBed.createComponent(CartNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
