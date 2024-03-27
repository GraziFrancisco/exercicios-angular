import { CursosService } from './cursos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';



@NgModule({
  declarations: [
    CursoDetalheComponent,
    CursosComponent
    
  ],
  imports: [
    CommonModule
  ],

  providers: [
    CursosService
  ],

  exports: [
    CursosComponent
  ]
})
export class CursosModule { }
