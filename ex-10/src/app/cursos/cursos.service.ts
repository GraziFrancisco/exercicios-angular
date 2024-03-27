import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {



  constructor() {  }

  getCursos() {
    return ['Java', 'Ext JS', 'Angular', 'PHP'];
  }

  
}
