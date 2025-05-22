import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitOtpFormComponent } from './submit-otp-form.component';

describe('SubmitOtpFormComponent', () => {
  let component: SubmitOtpFormComponent;
  let fixture: ComponentFixture<SubmitOtpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitOtpFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitOtpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
