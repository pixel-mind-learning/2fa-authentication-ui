import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [CommonModule, AuthenticationRoutingModule, RouterModule]
})
export class AuthenticationModule {}
