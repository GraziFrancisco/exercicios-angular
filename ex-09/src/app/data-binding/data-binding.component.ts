import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  url: string = 'https://google.com.br';
  cursoAngular: boolean = true;
  urlImage: string = 'https://picsum.photos/400/200';
  nome: string = 'abc';
  nomeDoCurso: string = 'Angular';
  bebida: string = 'coffe';
  pessoa: any = {
    nome: 'Grazi',
    idade: '38',
    sexo: 'F'
  }
  nomeCurso: string = 'Angular';
  valorInicial: number = 15;
  

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;

  }

  onMudouValor(evento) {
    console.log(evento.novoValor);
  }
}
