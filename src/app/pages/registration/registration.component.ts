import { Component, OnInit } from '@angular/core';
import { ok } from 'assert';

@Component({
  selector: 'ngx-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  user: any = {name: '', phone: ''};
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
      console.log('All OKEY');
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
    return 'OK';
  }

}
