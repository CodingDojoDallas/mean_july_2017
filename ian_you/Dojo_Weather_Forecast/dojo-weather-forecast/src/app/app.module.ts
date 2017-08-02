import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DallasComponent } from './dallas/dallas.component';
import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { WashingtonDCComponent } from './washington-dc/washington-dc.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { LandingComponent } from './landing/landing.component';


import { WeatherService } from './weather.service';
import { HttpModule } from '@angular/http'; // HTTP module


@NgModule({
  declarations: [
    AppComponent,
    DallasComponent,
    SeattleComponent,
    SanjoseComponent,
    BurbankComponent,
    WashingtonDCComponent,
    ChicagoComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
