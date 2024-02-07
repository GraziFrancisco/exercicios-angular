import { Component, Input, ViewEncapsulation, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.Emulated //None, Native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
 @Input('srvElement') element: {type: string, name: string, content: string};
 @Input() name: string;
 @ViewChild('heading', {static: true}) header: ElementRef;
 @ContentChild ('contentParagraph', {static: true}) paragraph: ElementRef;


 constructor() {
  console.log('constructor called!')
 }

 ngOnChanges(changes: SimpleChanges) {
  console.log('ngOnChanges called!')
  console.log(changes);
 }

 ngOnInit() {
  console.log('ngOnInit called!')
  console.log('canteudo do texto', this.header.nativeElement.textContent);
  console.log('canteudo do texto do paragrafo', this.paragraph.nativeElement.textContent);
 }

 ngDoCheck() {
  console.log('ngDoCheck called!')
 }

 ngAfterContentInit() {
  console.log('ngAfterContentInit called!')
  console.log('canteudo do texto do paragrafo', this.paragraph.nativeElement.textContent);
 }

 ngAfterContentChecked() {
  console.log('ngAfterContentChecked called!')     
 }

 ngAfterViewInit() {
  console.log('ngAfterViewInit called!')  
  console.log('canteudo do texto', this.header.nativeElement.textContent);   
 }

 ngAfterViewChecked() {
  console.log('ngAfterViewInit called!')     
 }

ngOnDestroy() {
  console.log('ngOnDestroy called!')  
  }


  




}
