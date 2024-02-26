import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrl: './meu-form.component.css'
})
export class MeuFormComponent {
  url: string = 'https://google.com.br';
  cursoAngular: boolean = true;
  urlImage: string = 'https://picsum.photos/400/200';
  nome: string = 'abc';
  pessoa: any = {
    nome: 'Grazi',
    idade: '38',
    sexo: 'F'
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;

  }
}
