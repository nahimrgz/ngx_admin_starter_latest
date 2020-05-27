import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';
import { RegistrationComponent } from './registration.component';
import { FormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    BrowserModule,
    CommonModule,
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    FormsModule,
    RecaptchaModule,
  ],
})
export class RegistrationModule { }
