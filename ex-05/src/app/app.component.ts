import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numerosImpares: number[] = [];
  numerosPares: number[] = [];


  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.numerosPares.push(firedNumber);
    } else {
      this.numerosImpares.push(firedNumber);
    }
  }
}
