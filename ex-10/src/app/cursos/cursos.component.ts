import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {

  nomePortal: string = 'www.grazilachica.com';
  cursos: string[] = ['Java', 'Ext JS', 'Angular', 'PHP'];

}
