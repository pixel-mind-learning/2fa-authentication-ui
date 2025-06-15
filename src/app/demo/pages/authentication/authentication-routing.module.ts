import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '2fa-login',
        loadComponent: () => import('./2fa/base-login/base-login.component')
      },
      {
        path: '2fa-reset',
        loadComponent: () =>
          import('./2fa/reset-password/reset-password.component').then(m => m.ResetPasswordComponent)
      },
      {
        path: '2fa-qr',
        loadComponent: () =>
          import('./2fa/qr-verification/qr-verification.component').then(m => m.QrVerificationComponent)
      },
      {
        path: '2fa-verification-code',
        loadComponent: () =>
          import('./2fa/verification-code/verification-code.component').then(m => m.VerificationCodeComponent)
      },
      {
        path: 'login',
        loadComponent: () => import('./login/login.component')
      },
      {
        path: 'register',
        loadComponent: () => import('./register/register.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
