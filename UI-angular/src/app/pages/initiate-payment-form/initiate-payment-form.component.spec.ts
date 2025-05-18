import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiatePaymentFormComponent } from './initiate-payment-form.component';

describe('InitiatePaymentFormComponent', () => {
  let component: InitiatePaymentFormComponent;
  let fixture: ComponentFixture<InitiatePaymentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitiatePaymentFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitiatePaymentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
