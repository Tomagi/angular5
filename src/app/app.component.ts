import { Component, Renderer2, ElementRef, 
        ViewChild, ViewContainerRef, ComponentFactoryResolver,
        ComponentRef, ComponentFactory, OnDestroy } from '@angular/core';
        
import {DynamicCompComponent} from './component/dynamic-comp/dynamic-comp.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    localStorage.setItem('test','12345678');
    //localStorage.removeItem('test');
  }
}