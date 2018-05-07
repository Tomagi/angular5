import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DynamicCompComponent } from './component/dynamic-comp/dynamic-comp.component';
import { StartComponent } from './component/start/start.component';

import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DynamicCompComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  entryComponents : [
    DynamicCompComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
