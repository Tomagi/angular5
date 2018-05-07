import { Component, Renderer2, ElementRef, 
  ViewChild, ViewContainerRef, ComponentFactoryResolver,
  ComponentRef, ComponentFactory, OnDestroy } from '@angular/core';
  
import {DynamicCompComponent} from '../dynamic-comp/dynamic-comp.component';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnDestroy {

  ngOnDestroy(){
    this.destroyComponent();
  }
  constructor (private renderer : Renderer2, 
              private el:ElementRef,
              private resolver: ComponentFactoryResolver){

    this.renderer.setStyle(this.el.nativeElement, 'font-size','25px');
  }

  title = 'app';
  display : boolean = false;
  myArray: Array<number> = [1,2,3];
  objArray : any[] = [
    {firstName:'Tomer', lastName:'Gueta'},
    {firstName:'Noga', lastName:'Dvora'},
    {firstName:'Moshe', lastName:'David'}
  ];
  componentRef : any;
  
  @ViewChild('messageContainer',{read: ViewContainerRef}) entry : ViewContainerRef;

  createComponent(message){
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(DynamicCompComponent);
    this.componentRef = this.entry.createComponent(factory);
    this.componentRef.instance.message = message;
  }

  destroyComponent(){
    if (this.componentRef){
      this.componentRef.destroy();
    }
  }
  
  getMyName(): string {
    return 'Tomer Gueta';
  }

  addElements(): void {
    this.myArray.push(Math.random() * 20);
  } 

  subElements(): void {
    //this.myArray.shift();
    this.myArray.splice(0,5);
  }

}
