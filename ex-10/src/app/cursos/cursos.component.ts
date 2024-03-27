import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';



@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements OnInit {

  nomePortal: string = 'www.grazilachica.com';
  cursos: string[];

  constructor(public cursosService: CursosService) {
    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit() {

  }
}


