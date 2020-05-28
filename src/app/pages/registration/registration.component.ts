import { Component, OnInit } from '@angular/core';
import { ok } from 'assert';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'ngx-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  user: any = { nombre: '', celular: '', plusResult: 0, numbersSelected: [] };
  numbersSelected: number[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    if (localStorage.getItem('numbersSelected')) {
      this.numbersSelected = JSON.parse(localStorage.getItem('numbersSelected'));
    }


  }

  saveTickets() {
    const msg = this.checkInputs();
    if (msg !== 'OK') {
      alert(`Error: ${msg}, por favor valida tus datos`)
    } else {
      this.user.numbersSelected[0] = this.numbersSelected[0] + 1;
      this.user.numbersSelected[1] = this.numbersSelected[1] + 1;

      delete this.user.plusResult;
      console.log(this.user);
      
      this.userService.putNumbersAvailable(this.user)
        .subscribe(res => {
          alert('Tus números se han guardado satisfactoriamente.')},
          error => {
            console.log(error);            
            alert(error);
          });
    }
  }

  checkInputs(): string {
    if (this.user.nombre === '') {
      return 'invalid name';
    }
    if (this.user.celular === '' || this.user.celular.length !== 10) {
      return 'invalid phone';
    }
    if (this.numbersSelected.length !== 2) {
      return 'numbers not selected';
    }
    if ((this.numbersSelected[0] + this.numbersSelected[1]) !== +this.user.plusResult) {
      return 'la suma es incorrecta';
    }

    return 'OK';
  }

  //   resolved(captchaResponse: string) {
  //     console.log(`Resolved captcha with response: ${captchaResponse}`);
  // }

}
