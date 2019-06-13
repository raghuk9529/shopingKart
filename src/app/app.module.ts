import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ImageZoomModule} from 'angular2-image-zoom';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SectionComponent } from './section/section.component';
import { LoginComponent } from './login/login.component';


import { SubNavbarComponent } from './sub-navbar/sub-navbar.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { routing } from './app.routing';
import { TvComponent } from './tv/tv.component';
import { MensComponent } from './mens/mens.component';
import { WomensComponent } from './womens/womens.component';
import { ToysComponent } from './toys/toys.component';

import { HttpModule } from '@angular/http';
import { EproductdetailsComponent } from './eproductdetails/eproductdetails.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { MensProductDetailsComponent } from './mens-product-details/mens-product-details.component';
import { WProductDetailsComponent } from './w-product-details/w-product-details.component';
import { TproductdetailsComponent } from './tproductdetails/tproductdetails.component';
import { SportsComponent } from './sports/sports.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SectionComponent,
    LoginComponent,
    
    SubNavbarComponent,
    ElectronicsComponent,
    TvComponent,
    MensComponent,
    WomensComponent,
    ToysComponent,
    EproductdetailsComponent,
    SignupComponent,
    MensProductDetailsComponent,
    WProductDetailsComponent,
    TproductdetailsComponent,
    SportsComponent
  ],
  imports: [
    BrowserModule,routing,HttpModule,ReactiveFormsModule,FormsModule,ImageZoomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
