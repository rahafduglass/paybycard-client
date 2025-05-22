import {Routes} from '@angular/router';

export const routes: Routes = [{
  path: 'initiate-payment',
  loadComponent: () =>
    import('./pages/initiate-payment-form/initiate-payment-form.component').then(c => c.InitiatePaymentFormComponent),
}
  , {
    path: 'send-otp',
    loadComponent: () =>
      import('./pages/send-otp/send-otp.component').then(c => c.SendOtpComponent),
  },
  {
    path: 'submit-otp',
    loadComponent: () =>
      import('./pages/submit-otp-form/submit-otp-form.component').then(c => c.SubmitOtpFormComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login-form/login-form.component').then(c => c.LoginFormComponent),
  }
];
