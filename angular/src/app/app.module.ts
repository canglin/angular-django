import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';

import {CarService} from './car.service';
import {AppComponent} from './app.component';
import {PersonComponent} from './person/person.component';
import {EngineComponent} from './engine/engine.component';
import {ExteriorComponent} from './exterior/exterior.component';
import {InteriorComponent} from './interior/interior.component';
import {AutopilotComponent} from './autopilot/autopilot.component';
import {PaymentComponent} from './payment/payment.component';
import {SummaryComponent} from './summary/summary.component';
import {PreviewComponent} from './preview/preview.component';
import { ColorpickerComponent } from './colorpicker/colorpicker.component';
import { BarComponent } from './colorpicker/bar/bar.component';
import { CbarComponent } from './colorpicker/cbar/cbar.component';

const appRoutes: Routes = [
  { path: 'engine', component: EngineComponent },
  { path: 'exterior', component: ExteriorComponent },
  { path: 'interior', component: InteriorComponent },
  { path: 'autopilot', component: AutopilotComponent },
  { path: 'payment', component: PaymentComponent },
  { path: '', redirectTo: '/engine', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    EngineComponent,
    ExteriorComponent,
    InteriorComponent,
    AutopilotComponent,
    PaymentComponent,
    SummaryComponent,
    PreviewComponent,
    ColorpickerComponent,
    BarComponent,
    CbarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }

