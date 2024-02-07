import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { ParComponent } from './par/par.component';
import { ImparComponent } from './impar/impar.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    ParComponent,
    ImparComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
