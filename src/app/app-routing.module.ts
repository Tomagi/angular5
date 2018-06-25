import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DynamicCompComponent} from './component/dynamic-comp/dynamic-comp.component';
import {StartComponent} from './component/start/start.component';


const routes: Routes = [
  {path:'', component:StartComponent},
  {path:'message', component:DynamicCompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
