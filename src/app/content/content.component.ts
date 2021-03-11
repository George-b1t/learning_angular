import { Component, HostListener } from '@angular/core';
import { Cars } from './cars';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})

export class ContentComponent {
  value = 1;
  cars = [
    new Cars(1, 'BMW'),
  ];

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    // @ts-ignore
    console.log(document.getElementById('unpair-button').getBoundingClientRect().top);
  }

  add(): void {
    // @ts-ignore
    const carName = document.getElementById('input-car-name').value;
    if ( this.value < 7 && carName) {
      this.value++;
      this.cars = [...this.cars, new Cars(this.value, carName)];
      // @ts-ignore
      document.getElementById('input-car-name').value = '';
    } else {
      alert('Limite de carros atingido ou carro sem nome');
    }
  }

  remove(): void {
    if (this.value > 1) {
      this.value--;
      this.cars.splice(this.value);
    }
  }
}
