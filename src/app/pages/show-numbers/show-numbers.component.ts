import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-show-numbers',
  templateUrl: './show-numbers.component.html',
  styleUrls: ['./show-numbers.component.scss'],
})
export class ShowNumbersComponent implements OnInit {
  numbersSelected: number[] = [];
  numbers: any[] = [];
  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.numbers.push({value: `${i}`});
    }
  }

  addNumber(numberValue) {
    if (this.numbersSelected.length < 2) {
      this.numbersSelected.push(+numberValue);
      this.setLocalStorage();
    } else {
      alert('Unicamente puedes seleccionar dos números');
    }
    console.log(this.numbersSelected);
    
  }

  setLocalStorage() {
    if (localStorage.getItem('numbersSelected')) {
      localStorage.removeItem('numbersSelected');
      localStorage.setItem('numbersSelected', JSON.stringify(this.numbersSelected));
    } else {
      localStorage.setItem('numbersSelected', JSON.stringify(this.numbersSelected));
    }
  }

  removeNumber(numberValue) {
    const numberSelectedIndex = this.numbersSelected.indexOf(+numberValue);
    if (numberSelectedIndex !== -1 ) {
      this.numbersSelected.splice(numberSelectedIndex, 1);
      this.setLocalStorage();
      alert(`Quitaste el número ${numberValue} de tu lista`);
    }
  }
}
