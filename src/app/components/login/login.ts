import { Component } from '@angular/core';
import { LoginForm } from "./login-form/login-form";
import { ResetPasswordForm } from "./reset-password-form/reset-password-form";
import { AuthAppRegistration } from "./auth-app-registration/auth-app-registration";
import { AuthenticationForm } from "./authentication-form/authentication-form";

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrl: './login.css',
  imports: [LoginForm, ResetPasswordForm, AuthAppRegistration, AuthenticationForm]
})
export class Login {
}
