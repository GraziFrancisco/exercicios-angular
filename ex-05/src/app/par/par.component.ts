import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-par',
  templateUrl: './par.component.html',
  styleUrl: './par.component.css'
})
export class ParComponent {
@Input() number: number;




}
