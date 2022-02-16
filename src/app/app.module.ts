import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
  RouterModule.forRoot([
    {path:'', component:ProductListComponent}
  ]) 
],
  declarations: [ AppComponent, TopBarComponent, ProductListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }