import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrl: './input-property.component.css'
})
export class InputPropertyComponent {
  @Input() alguem: any = {};
  @Input() qualBebida: string = '';
  @Input('nome') nomeCurso: string = '';
}
