import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-impar',
  templateUrl: './impar.component.html',
  styleUrl: './impar.component.css'
})
export class ImparComponent {
  @Input() number: number;


}
