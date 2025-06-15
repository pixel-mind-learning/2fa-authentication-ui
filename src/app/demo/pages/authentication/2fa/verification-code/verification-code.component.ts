import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-verification-code',
  imports: [CommonModule, RouterModule],
  templateUrl: './verification-code.component.html',
  styleUrl: './verification-code.component.scss'
})
export class VerificationCodeComponent {
  // This component is used to verify the code entered by the user during 2FA authentication.
  // It can be extended with additional logic for handling verification, such as API calls or state management.

  digits = Array(6);
  authCode: string[] = ['', '', '', '', '', ''];

  moveToNext(event: any, index: number) {
    const input = event.target;
    const value = input.value;

    if (!/^\d$/.test(value)) {
      this.authCode[index] = '';
      return;
    }

    if (index < 4 && value) {
      const nextInput = input.nextElementSibling;
      if (nextInput) nextInput.focus();
    }
  }

}
