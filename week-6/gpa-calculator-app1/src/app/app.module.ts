//Danielle Taplin
//app.module.ts
//11/26/23
//app module

//import BrowserModule and NgModule from angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import components/modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

//create and export app module with component declarations and necessary imports
@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    AuthLayoutComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
