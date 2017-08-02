import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent} from './app.component';
import { DallasComponent } from './dallas/dallas.component';
import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { WashingtonDCComponent } from './washington-dc/washington-dc.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: '', pathMatch: "full", component:LandingComponent
  },
  {
    path: 'dallas', component: DallasComponent
  },
  {
    path: 'seattle', component: SeattleComponent
  },
  {
    path: 'sanjose', component: SanjoseComponent
  },
  {
    path: 'burbank', component: BurbankComponent
  },
  {
    path: 'dc', component: WashingtonDCComponent
  },
  {
    path: 'chicago', component: ChicagoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
