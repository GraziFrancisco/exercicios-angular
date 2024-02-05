import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  detalhe = false;
  log = [];

  addDetalhes() {
    this.detalhe = !this.detalhe;
    //this.log.push(this.log.length + 1)
    this.log.push(new Date())
  }


}
