import { Component, OnInit } from '@angular/core';
import { ok } from 'assert';

@Component({
  selector: 'ngx-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  user: any = {name: '', phone: '', plusResult: 0};
  numbersSelected: number[] = [];
  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('numbersSelected')) {
      this.numbersSelected = JSON.parse(localStorage.getItem('numbersSelected'));
    }
  }

  saveTickets() {
    const msg = this.checkInputs();
    if ( msg !== 'OK') {
      alert(`Error: ${msg}, por favor valida tus datos`)
    } else {
      console.log('All OKEY', this.user);
    }
  }

  checkInputs(): string {
    if (this.user.name === '') {
      return 'invalid name';
    }
    if (this.user.phone === '' || this.user.phone.length !== 10) {
      return 'invalid phone';
    }
    if (this.numbersSelected.length !== 2) {
      return 'numbers not selected';
    }
    if((this.numbersSelected[0] + this.numbersSelected[1]) !== +this.user.plusResult){
     return 'la suma es incorrecta';      
    }
    
    return 'OK';
  }

//   resolved(captchaResponse: string) {
//     console.log(`Resolved captcha with response: ${captchaResponse}`);
// }

}
